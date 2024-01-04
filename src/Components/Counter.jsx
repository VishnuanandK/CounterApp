import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const count=useSelector((state)=>state.counterSlice.count)
const [amount,setAmount]=useState(0)
const handleIncrement=()=>{
  if(amount>0){
    dispatch(incrementbyAmount(+amount))
  setAmount("")
  }
  else{
    alert("enter valid amount")
  }
}
  return (
    <div>
      <div className='text-center border  rounded container p-5 my-5 container w-50 '>

        <h1 className='text-danger  ' style={{fontSize:'100px'}}> {count} </h1>

        <div className=' text-center'>
          <button onClick={()=>dispatch(increment())} className='btn btn-success mt-5' type='button'>INCREMENT</button>
          <button   onClick={()=>dispatch(reset())} className='btn btn-danger ms-5 mt-5'>RESET</button>

          <button onClick={()=>dispatch(decrement())} className='btn btn-warning ms-5 mt-5'>DECREMENT</button>
        </div>
        <div className='mt-5 w-100 d-flex justify-content-between '>
          <input type="text" value={amount} onChange={e=>setAmount(e.target.value)} placeholder='Enter the amount to be incremented'className='form-control' />
          <button onClick={handleIncrement} className='btn btn-info ms-3'>Increment by amount</button>


        </div>

      </div>

    </div>
  )
}

export default Counter