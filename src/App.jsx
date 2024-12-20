import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
const increase=() => {
  if (count===50) {
    setCount(50)
  } else {
    setCount(count+1)
  }
}
  const decrease = () => {
    if (count === 0) {
      setCount(0); 
    } else {
      setCount(count - 1); 
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <h2>{count}</h2>
        <button onClick={increase}>
          Increase
        </button>
        <button onClick={decrease}>
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
