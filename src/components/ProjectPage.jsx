import React from 'react';
import PledgeCard from './PledgeCard';
import masterLogo from '../assets/logo-mastercraft.svg'
import bookmark from '../assets/icon-bookmark.svg'


export default function ProjectPage() {
const percentFinished = 89914 / 100000 * 100 + '%';

  return (
    <main className = " relative -top-16 mx-auto my-0 w-[90%] -z-[5] tablet:w-[50%]">
      <div className='flex flex-col bg-white items-center border-[.5px] rounded-lg text-center mb-5'>
        <img src={masterLogo} alt="mastercraft logo" className='relative -top-7 max-w-[56px]' />
        <p className='relative text-base font-bold -top-3'>Mastercraft Bamboo <br /> Monitor Riser</p>
        <p className='text-sm text-Dark-gray px-4'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className='flex my-5 mb-8 gap-x-2'>
          <button className='bg-Moderate-cyan hover:bg-Dark-cyan rounded-full px-10 text-white text-sm font-bold'>Back this project</button>
          <img src={bookmark} alt="bookmark" className='max-w-[56px]' />
        </div>
      </div>
      <div className='flex flex-col bg-white items-center border-[.5px] rounded-lg text-center py-4 mb-5'>
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
        <div className='bg-white border-[.5px] rounded-lg py-4'>
          <div className='w-[90%] mx-auto'>
            <h1 className='text-xl font-bold mb-5'>About this project</h1>
            <p className='text-sm text-Dark-gray mb-5'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className='text-sm text-Dark-gray mb-5'>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <PledgeCard title="Bamboo Stand" subTitle="Pledge $25 or more" description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list." numberLeft={101}/>
            <PledgeCard title="Black Edition Stand" subTitle="Pledge $75 or more" description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included." numberLeft={64}/>
            <PledgeCard title="Mahogany Special Edition" subTitle="Pledge $200 or more" description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included." numberLeft={0}/>
          </div>
        </div>
    </main>
  )
}
