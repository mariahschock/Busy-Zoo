import useState from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="circus">
          <div className="star">
            <img src="Lion.jpg"></img>
            <button>Grow Lion</button>
            <button>Shrink Lion</button>
          </div>
          <div className="star">
            <img src="Elephant.jpg"></img>
            <button>Grow Elephant</button>
            <button>Shrink Elephant</button>
          </div>
        </div>
          
      </header>
    </div>
  );
}

export default App;
