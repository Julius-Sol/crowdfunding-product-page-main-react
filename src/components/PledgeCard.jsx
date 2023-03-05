import React from 'react'

export default function PledgeCard(props) {

  const {title, subTitle, description, numberLeft} = props
  return (
    <div className='bg-white border-[.5px] rounded-lg py-4 mb-5'>
      <div className={`w-[90%] mx-auto ${numberLeft ? "" : " opacity-40"}`}>
        <h1 className='text-lg font-bold'>{title}</h1>
        <p className='text-sm font-bold text-Moderate-cyan mb-5'>{subTitle}</p>
        <p className='text-sm text-Dark-gray mb-5'>{description}</p>
        <div className='tablet:flex tablet:w-full justify-between'>
          <p className='text-3xl font-bold mb-5'>{numberLeft}<span className='relative text-sm text-Dark-gray -top-1.5 left-1'>left</span></p>
          {numberLeft? <button className='bg-Moderate-cyan hover:bg-Dark-cyan rounded-full px-7 py-3 text-white text-sm font-bold' onClick={props.handleSelectionClick}>Select Reward</button> : <button className='bg-Dark-gray hover:cursor-default rounded-full px-7 py-3 text-white text-sm font-bold'>Out of Stock</button> }
        </div>
      </div>
    </div>
  )
}
