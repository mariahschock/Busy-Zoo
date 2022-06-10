import React from 'react';
import useSound from 'use-sound';
import Circus from './Circus.mp3';

export default function Music() {
  const [play] = useSound(Circus, { interrupt: true });
  return (
    <div>
      <button onClick={play}>Play Circus Music</button>
    </div>
  );
}
