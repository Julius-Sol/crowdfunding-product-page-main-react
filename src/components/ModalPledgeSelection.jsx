import React from 'react'
import SelectionCardOption from './SelectionCardOption';

function ModalPledgeSelection(props) {
  let showComp = props.showModal? "block" : "hidden";
  return (
    <div className={`absolute z-20 bg-white w-[80%] left-10 top-20 px-5 py-8 ${showComp}`}>
        <div className='flex justify-between items-center mb-5'>
          <h1 className='font-bold'>Back this project</h1>
          <div className="h-[15px] w-[14px] contrast-0 bg-[url('./assets/icon-close-menu.svg')] hover:cursor-pointer" onClick={props.handleSelectionClick}></div>
        </div>
        <p className='text-xs text-Dark-gray mb-5'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <SelectionCardOption/>


      </div>
  )
}

export default ModalPledgeSelection