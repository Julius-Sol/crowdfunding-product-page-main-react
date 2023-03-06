import React from 'react'
import check from '../assets/icon-check.svg'

export default function Complete(props) {
  return (
    <div className={`${props.showComplete? "" : "hidden"} fixed flex flex-col -translate-x-1/2 left-[50%] w-[90%] mt-[8rem] py-3 px-5 bg-white items-center justify-center rounded-lg z-50`}>
      <img src={check} alt="check image" className='w-[64px]'/>
      <h1 className='font-bold text-lg mt-5'>Thanks for your support!</h1>
      <p className='text-sm text-Dark-gray mb-10 mt-5 text-center'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
      <button className='bg-Moderate-cyan rounded-full text-white px-7 py-3 mb-8 hover:bg-Dark-cyan' onClick={props.handleCompleteClick}>Got it!</button>
    </div>
  )
}
