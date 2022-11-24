import React, { useState, useRef, useEffect } from "react";
import "../audioPlayer/audioPlayer.css";
import Controls from "../audioPlayer/controls";
import ProgressCircle from "../audioPlayer/progressCircle";
import WaveAnimation from "../audioPlayer/waveAnimation";
// import Controls from "./controls";
// import ProgressCircle from "./progressCircle";
// import WaveAnimation from "./waveAnimation";

export default function AudioAlbum({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
  currentImages,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  let audioSrc = total[currentIndex]?.preview_url;

  const audioRef = useRef(new Audio(total[0]?.preview_url));

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;


  //מגדיר את זמן השיר
  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };


  //מגדיר איזה שיר יתנגן מהשנפתח אוטומטי או מה שהמשתמש בחר
  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  //העברת שיר של המשתמש
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  //כיבוי השיר כשיוצאים מהמסך
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  //לחיצה על כפתור הבא בפליליסט
  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };
  
  //לחיצה על כפתור אחורה בפליליסט
  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };
  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  const img = currentPercentage? currentPercentage:
  currentTrack?.album?.images[0]?.url
  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={img}
          isPlaying={true}
          image={currentImages}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body flex">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}