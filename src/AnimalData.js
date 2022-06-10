import React from 'react';

export default function AnimalData({ animal }) {
  return (
    <div className="animal">
      {animal === 'tiger' && '🐅'}
      {animal === 'zebra' && '🦓'}
      {animal === 'giraffe' && '🦒'}
      {animal === 'rhino' && '🦏'}
    </div>
  );
}
