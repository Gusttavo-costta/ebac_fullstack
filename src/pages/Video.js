import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoref = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoref.current.pause();
      setPlay(false);
    } else {
      videoref.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoref}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3
            "
      ></video>
    </div>
  );
}

export default Video;
