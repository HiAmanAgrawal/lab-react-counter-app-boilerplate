import  { useState } from 'react';
import './App.css'
const App = ()=>{
  const [number, setNumber] = useState(0);
    const addOne=()=>{
      setNumber(number+1)
    }
    const subtractOne=()=>{
      setNumber(number-1)
    }
    const reset=()=>{
      setNumber(0)
    }
    return (
      <div>
        <h1>Counter App</h1>
        <div className='number'>{number}</div>
        <div className='controls'>
          <button onClick={addOne}>+</button>
          <button onClick={subtractOne}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    )
  }

export default App
