import { useState } from 'react';
import './App.css';

function App() {

  const [lionSize, setLionSize] = useState(25);
  const [elephantSize, setElephantSize] = useState(25);

  return (
    <div className="App">
      <header className="App-header">
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
          
      </header>
    </div>
  );
}

export default App;
