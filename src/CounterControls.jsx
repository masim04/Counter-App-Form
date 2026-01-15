import React from 'react'

const CounterControls = (props) => {
  return (
    <div className='flex gap-4'>
        <button onClick={props.increment} className='w-30 h-10 bg-blue-500 text-white rounded-lg'>Increase</button>
        <button onClick={props.decrement} className='w-30 h-10 bg-red-500 text-white rounded-lg'>Decrease</button>
        <button onClick={props.reset} className='w-30 h-10 bg-gray-500 text-white rounded-lg'>Reset</button>
    </div>
  )
}

export default CounterControls