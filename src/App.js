import { useState } from 'react';
import './App.css';
import Sign from './Sign';
import AnimalList from './AnimalList';
import Music from './Music';
import CustomButton, { AnotherButton, SignButton } from './CustomButton';

function App() {

  const [lionSize, setLionSize] = useState(20);
  const [elephantSize, setElephantSize] = useState(20);
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
  function handleRemoveAnimal() {
    animals.pop();
    setAnimals(animals.slice());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Circus!!</h1>
        <Sign circusIsOpen={circusIsOpen} />
        <SignButton onClick={() => setCircusIsOpen(!circusIsOpen)}>Open/Close Sign</SignButton>
        <Music />
        <div className="circus">
          <div className="star">
            <img src="Lion.png" style={{ width: `${lionSize * 10 }px` }}></img>
            <CustomButton onClick={() => setLionSize(lionSize + 5)}>Grow Lion</CustomButton>
            <CustomButton onClick={() => setLionSize(lionSize - 5)}>Shrink Lion</CustomButton>
          </div>
          <div className="star">
            <img src="Elephant.png" style={{ width: `${elephantSize * 10 }px` }}></img>
            <CustomButton onClick={() => setElephantSize(elephantSize + 5)}>Grow Elephant</CustomButton>
            <CustomButton onClick={() => setElephantSize(elephantSize - 5)}>Shrink Elephant</CustomButton>
          </div>
        </div>
        <AnimalList animals={animals} />  
        <div className="buttons">
          <AnotherButton onClick={() => handleTigerClick('tiger')}>Tiger</AnotherButton>
          <AnotherButton onClick={() => handleZebraClick('zebra')}>Zebra</AnotherButton>
          <AnotherButton onClick={() => handleGiraffeClick('giraffe')}>Giraffe</AnotherButton>
          <AnotherButton onClick={() => handleRhinoClick('rhino')}>Rhino</AnotherButton>
          <AnotherButton onClick={handleRemoveAnimal}>Remove Last Animal</AnotherButton>
        </div>
      </header>
    </div>
  );
}

export default App;
