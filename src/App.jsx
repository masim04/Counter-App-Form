import React, { useState } from 'react'
import CounterControls from './CounterControls'
import DisplayCounter from './DisplayCounter'
import CounterForm from './CounterForm'

const App = () => {
const [counter, setcounter] = useState(0);
const [input, setInput] = useState('');
const increment = () =>{setcounter(counter+1)}
const decrement = () =>{setcounter(counter-1)}
const formhandle = (e) => {
  e.preventDefault();
  if(input !== ''){
  setcounter(Number(input));
  setInput('');
};
}
const reset =() =>{setcounter(0)};
  return (
    <div className=' h-screen flex flex-col justify-center items-center'>
      <h2 className='text-6xl font-bold'>Counter</h2>
      <DisplayCounter cntr={counter}/>
      <CounterForm formhandle={formhandle} input={input} setInput={setInput}/>
      <CounterControls increment={increment} decrement={decrement} reset={reset}/>
    </div>
  );
}

export default App