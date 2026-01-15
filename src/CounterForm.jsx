import React from 'react'

const CounterForm = (props) => {
  return (
    <div className='bg-white-200 rounded-md p-5 m-5'>
        <form onSubmit={props.formhandle}>
            <input type="text" className='p-2 border-none' placeholder='Enter a Number' value = {props.input} onChange={(e)=>{props.setInput(e.target.value)}}/>
            <button type='submit' className='bg-red-800 text-white px-4 py-2 ml-2 rounded-md'>Set Counter</button>
         </form>
    </div>
  )
}

export default CounterForm