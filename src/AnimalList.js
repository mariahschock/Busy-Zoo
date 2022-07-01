import React from 'react';
import AnimalData from './AnimalData';

export default function AnimalList({ animals }) {
  return (
    <div className="animals">
      {
        animals.map((animal, i) => <AnimalData key={animal + i} animal={animal} />) 
      }
    </div>
  );
}
