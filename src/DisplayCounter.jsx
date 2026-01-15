import React from 'react'

const DisplayCounter = (props) => {
  return (
    <div className='h-30 p-1 text-6xl flex justify-center items-center border-4 border-black w-40 my-4 bg-white'> 
       <h1>{props.cntr}</h1>
    </div>
  )
}

export default DisplayCounter