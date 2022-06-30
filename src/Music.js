import React from 'react';
import useSound from 'use-sound';
import Circus from './Circus.mp3';
import './App.css';
import { MusicButton } from './CustomButton';

export default function Music() {
  const [play] = useSound(Circus, { interrupt: true });
  return (
    <div className="music">
      <MusicButton onClick={play}>Play Circus Music</MusicButton>
    </div>
  );
}
