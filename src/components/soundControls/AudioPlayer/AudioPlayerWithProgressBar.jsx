import { useEffect, useRef, useState } from 'react';
import sudio from '../../../assets/audio/olivia-russian.mp3';

export const AudioPlayerWithProgressBar = () => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const updateTime = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setProgress((current / total) * 100);
  };

  const onSeek = (e) => {
    const newPos =
      (e.nativeEvent.offsetX / e.target.clientWidth) * audioRef.current.duration;
    audioRef.current.currentTime = newPos;
    setProgress((newPos / audioRef.current.duration) * 100);
  };

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', updateTime);
    audioRef.current.addEventListener('loadeddata', () =>
      setDuration(audioRef.current.duration)
    );

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateTime);
      audioRef.current.removeEventListener('loadeddata', () =>
        setDuration(audioRef.current.duration)
      );
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={'https://vk.com/mp3/bb2.mp3'} type='audio/mp3' />
        Your browser does not support the audio element.
      </audio>
      <div className='progress-bar' onClick={onSeek}>
        <div className='progress' style={{ width: `${progress}%` }}></div>
      </div>
      <div>Progress: {Math.floor(progress)}%</div>
    </div>
  );
};
