import React from 'react';
import masterLogo from '../assets/logo-mastercraft.svg'
import bookmark from '../assets/icon-bookmark.svg'
export default function ProjectPage() {
const percentFinished = 89914 / 100000 * 100 + '%';

  return (
    <main className = " relative -top-16 mx-auto my-0 w-[90%] -z-[5]">
      <div className='flex flex-col bg-white items-center border-[.5px] rounded-lg text-center mb-5'>
        <img src={masterLogo} alt="mastercraft logo" className='relative -top-7 max-w-[56px]' />
        <p className='relative text-base font-bold -top-3'>Mastercraft Bamboo <br /> Monitor Riser</p>
        <p className='text-sm text-Dark-gray px-4'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className='flex my-5 mb-8 gap-x-2'>
          <button className='bg-Moderate-cyan rounded-full px-10 text-white text-sm font-bold'>Back this project</button>
          <img src={bookmark} alt="bookmark" className='max-w-[56px]' />
        </div>
      </div>
      <div className='flex flex-col bg-white items-center border-[.5px] rounded-lg text-center py-4'>
          <p className='font-bold text-2xl'>$89,914</p>
          <p className='text-xs text-Dark-gray'>of $100,000 backed</p>
          <hr className='w-16 border-1 mt-2.5 ' />
          <p className='font-bold text-2xl mt-2'>5,007</p>
          <p className='text-xs text-Dark-gray'>total backers</p>
          <hr className='w-16 border-1 mt-2.5 '/>
          <p className='font-bold text-2xl mt-2'>56</p>
          <p className='text-xs text-Dark-gray'>days left</p>
          <div className='w-[90%] bg-Dark-gray h-3 rounded-full mt-5 mb-3'>
            <div className='bg-Moderate-cyan h-3 leading-normal rounded-full px-[.2rem]' style={{width : percentFinished }} ></div>
          </div>
        </div>
    </main>
  )
}
