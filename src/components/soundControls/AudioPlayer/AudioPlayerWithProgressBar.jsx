import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Howl } from 'howler';
import cn from 'classnames';
import audio from '../../../assets/audio/olivia-russian.mp3';
import { SoundSwitchStatus } from '../../../core/constants/SoundSwitchStatus';
import { formatTimeFromSeconds } from '../../../core/helpers/formatTimeFromSeconds';
import { PlayButton } from '../PlayButton/PlayButton';
import s from './style.module.scss';
import { soundSettings } from '../../../core/store/slices/soundSettingsSlice';

const sound = new Howl({
  src: audio,
  html5: true,
  preload: 'metadata',
});

export const AudioPlayerWithProgressBar = () => {
  const { soundRate } = useSelector(soundSettings);
  const { audioVolume } = useSelector(soundSettings);

  const [switchStatus, setSwitchStatus] = useState(SoundSwitchStatus.On);
  const [progress, setProgress] = useState(sound.seek());
  const [duration, setDuration] = useState(formatTimeFromSeconds(sound.duration()));

  const interval = 100;
  const timeout = 300;
  const minPercent = 0;
  const maxPercent = 100;
  let timer;

  sound.on('load', () => {
    setDuration(formatTimeFromSeconds(sound.duration()));
  });

  sound.once('play', () => {
    timer = setInterval(() => {
      setProgress(Math.ceil((sound.seek() / sound.duration()) * maxPercent));
      // console.log('setInterval');
    }, interval);
  });

  sound.on('pause', () => {
    clearInterval(timer);
  });

  sound.on('end', () => {
    setSwitchStatus(SoundSwitchStatus.On);
    clearInterval(timer);
    setProgress(maxPercent);
    setTimeout(() => {
      setProgress(minPercent);
    }, timeout);
  });

  const soundPlay = () => {
    if (switchStatus) {
      sound.play();
      setSwitchStatus(SoundSwitchStatus.Off);
    } else {
      sound.pause();
      setSwitchStatus(SoundSwitchStatus.On);
      clearInterval(timer);
    }
  };

  sound.rate(soundRate);
  sound.volume(audioVolume);

  return (
    <div className={cn(s.audioPlayer)}>
      <PlayButton
        className={cn(s.audioPlayer__btn, {
          [s.audioPlayer__off]: switchStatus === SoundSwitchStatus.Off,
        })}
        onClick={soundPlay}
        switchStatus={switchStatus}
      />
      <div className={cn(s.audioPlayer__right)}>
        <div className={cn(s.audioPlayer__progressBar)}>
          <div
            className={cn(s.audioPlayer__progress)}
            style={{ width: progress + '%' }}></div>
        </div>
        <div className={cn(s.audioPlayer__duration)}>{duration}</div>
      </div>
    </div>
  );

  // const audioRef = useRef(null);
  // const [progress, setProgress] = useState(0);
  // const [duration, setDuration] = useState(0);

  // const updateTime = () => {
  //   const current = audioRef.current.currentTime;
  //   const total = audioRef.current.duration;
  //   setProgress((current / total) * 100);
  // };

  // const onSeek = (e) => {
  //   const newPos =
  //     (e.nativeEvent.offsetX / e.target.clientWidth) * audioRef.current.duration;
  //   audioRef.current.currentTime = newPos;
  //   setProgress((newPos / audioRef.current.duration) * 100);
  // };

  // useEffect(() => {
  //   audioRef.current.addEventListener('timeupdate', updateTime);
  //   audioRef.current.addEventListener('loadeddata', () =>
  //     setDuration(audioRef.current.duration)
  //   );

  //   return () => {
  //     audioRef.current.removeEventListener('timeupdate', updateTime);
  //     audioRef.current.removeEventListener('loadeddata', () =>
  //       setDuration(audioRef.current.duration)
  //     );
  //   };
  // }, []);

  // return (
  //   <div>
  //     <audio ref={audioRef} controls>
  //       <source src={'https://vk.com/mp3/bb2.mp3'} type='audio/mp3' />
  //       Your browser does not support the audio element.
  //     </audio>
  //     <div className='progress-bar' onClick={onSeek}>
  //       <div className='progress' style={{ width: `${progress}%` }}></div>
  //     </div>
  //     <div>Progress: {Math.floor(progress)}%</div>
  //   </div>
  // );
};
