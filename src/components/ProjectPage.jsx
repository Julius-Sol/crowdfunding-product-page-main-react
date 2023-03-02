import React from 'react';
import masterLogo from '../assets/logo-mastercraft.svg'
import bookmark from '../assets/icon-bookmark.svg'
export default function ProjectPage() {
  return (
    <main className = " relative -top-16 mx-auto my-0 w-[90%] -z-[5]">
      <div className='flex flex-col bg-white items-center border-[.5px] rounded-lg text-center'>
        <img src={masterLogo} alt="mastercraft logo" className='relative -top-7 max-w-[56px]' />
        <p className='relative text-base font-bold -top-3'>Mastercraft Bamboo <br /> Monitor Riser</p>
        <p className='text-sm text-Dark-gray px-4'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className='flex my-5 mb-8 gap-x-2'>
          <button className='bg-Moderate-cyan rounded-full px-10 text-white text-sm font-bold'>Back this project</button>
          <img src={bookmark} alt="bookmark" className='max-w-[56px]' />
        </div>
      </div>
    </main>
  )
}
