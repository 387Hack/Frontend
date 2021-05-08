import React, { useState, useEffect } from "react";
import bell from "../../Assets/Audio/bell.wav";

export default function SoundGame() {
  const [sounds, setSounds] = useState(new Audio(bell));

  useEffect(() => {
    sounds.playbackRate = 1;
  }, []);
  return <div>SoundGame</div>;
}
