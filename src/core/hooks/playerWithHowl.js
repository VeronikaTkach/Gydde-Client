import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SoundSwitchStatus } from '../constants/SoundSwitchStatus';
import { formatTimeFromSeconds } from '../helpers/formatTimeFromSeconds';
import { soundSettings, switchSound } from '../store/slices/soundSettingsSlice';

export function usePlayerWithHowl(src) {
  const dispatch = useDispatch();
  const { soundRate, audioVolume, soundSwitch } = useSelector(soundSettings);
  const [switchStatus, setSwitchStatus] = useState(soundSwitch);
  const [sound, setSound] = useState(null);
  const [progress, setProgress] = useState(null);
  const [duration, setDuration] = useState(formatTimeFromSeconds(null));
  const HowlConstructor = useRef(null);
  const isMounted = useRef(false);

  const handleLoad = function () {
    if (isMounted.current) {
      setDuration(formatTimeFromSeconds(this.duration()));
    }
    setSound(this);
  };

  useEffect(() => {
    import('howler').then((mod) => {
      if (!isMounted.current) {
        HowlConstructor.current = mod.Howl ?? mod.default.Howl;
        isMounted.current = true;
        new HowlConstructor.current({
          src: Array.isArray(src) ? src : [src],
          html5: true,
          onload: handleLoad,
        });
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (HowlConstructor.current && sound) {
      setSound(
        new HowlConstructor.current({
          src: Array.isArray(src) ? src : [src],
          html5: true,
          onload: handleLoad,
        })
      );
    }
  }, [JSON.stringify(src)]);

  useEffect(() => {
    dispatch(switchSound(switchStatus));
  }, [switchStatus]);

  const interval = 100;
  const timeout = 300;
  const minPercent = 0;
  const maxPercent = 100;
  let timer;

  if (sound) {
    sound.rate(soundRate);
    sound.volume(audioVolume);

    sound.once('load', () => {
      setDuration(formatTimeFromSeconds(sound.duration()));
    });

    sound.once('play', () => {
      timer = setInterval(() => {
        setProgress(Math.ceil((sound.seek() / sound.duration()) * maxPercent));
      }, interval);
      setSwitchStatus(SoundSwitchStatus.Off);
    });

    sound.once('pause', () => {
      clearInterval(timer);
      setSwitchStatus(SoundSwitchStatus.On);
    });

    sound.once('end', () => {
      setSwitchStatus(SoundSwitchStatus.On);
      clearInterval(timer);
      setProgress(maxPercent);
      setTimeout(() => {
        setProgress(minPercent);
      }, timeout);
    });
  }

  const switchAudio = () => {
    if (soundSwitch) {
      if (sound) {
        sound.play();
        dispatch(switchSound(SoundSwitchStatus.Off));
      }
    } else {
      if (sound) {
        sound.pause();
        dispatch(switchSound(SoundSwitchStatus.On));
        clearInterval(timer);
      }
    }
  };

  return { sound, soundSwitch, progress, duration, switchAudio };
}
