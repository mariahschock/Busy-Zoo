import { useState } from 'react';
import './App.css';
import Sign from './Sign';
import AnimalList from './AnimalList';

function App() {

  const [lionSize, setLionSize] = useState(25);
  const [elephantSize, setElephantSize] = useState(25);
  const [circusIsOpen, setCircusIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['tiger', 'zebra', 'giraffe', 'rhino']);

  function handleTigerClick() {
    animals.push('tiger');
    setAnimals(animals.slice());
  }
  function handleZebraClick() {
    animals.push('zebra');
    setAnimals(animals.slice());
  }
  function handleGiraffeClick() {
    animals.push('giraffe');
    setAnimals(animals.slice());
  }
  function handleRhinoClick() {
    animals.push('rhino');
    setAnimals(animals.slice());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Circus!!</h1>
        <Sign circusIsOpen={circusIsOpen} />
        <button onClick={() => setCircusIsOpen(!circusIsOpen)}>Open/Close Sign</button>
        <div className="circus">
          <div className="star">
            <img src="Lion.png" style={{ width: `${lionSize * 10 }px` }}></img>
            <button onClick={() => setLionSize(lionSize + 5)}>Grow Lion</button>
            <button onClick={() => setLionSize(lionSize - 5)}>Shrink Lion</button>
          </div>
          <div className="star">
            <img src="Elephant.png" style={{ width: `${elephantSize * 10 }px` }}></img>
            <button onClick={() => setElephantSize(elephantSize + 5)}>Grow Elephant</button>
            <button onClick={() => setElephantSize(elephantSize - 5)}>Shrink Elephant</button>
          </div>
        </div>
        <AnimalList animals={animals} />  
        <div className="buttons">
          <button onClick={() => handleTigerClick('tiger')}>Tiger</button>
          <button onClick={() => handleZebraClick('zebra')}>Zebra</button>
          <button onClick={() => handleGiraffeClick('giraffe')}>Giraffe</button>
          <button onClick={() => handleRhinoClick('rhino')}>Rhino</button>
        </div>
      </header>
    </div>
  );
}

export default App;
