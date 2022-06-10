import React from 'react';
import useSound from 'use-sound';
import Circus from './Circus.mp3';

export default function Music() {
  const [play, { stop }] = useSound(Circus, { interrupt: true });
  return (
    <div>
      <button onClick={play}>Play Circus Music</button>
      <button onClick={stop}>Stop Circus Music</button>
    </div>
  );
}
