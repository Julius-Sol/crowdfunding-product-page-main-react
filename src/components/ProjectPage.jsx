import React from 'react';
import PledgeCard from './PledgeCard';
import ProjectInfo from './ProjectInfo';


export default function ProjectPage(props) {
const percentFinished = 89914 / 100000 * 100 + '%';

  return (
    <main className = " relative -top-16 mx-auto my-0 w-[90%] -z-[5] tablet:w-[50%]">
      <ProjectInfo handleSelectionClick={props.handleSelectionClick}/>
      <div className='flex flex-col bg-white items-center border-[.5px] rounded-lg text-center py-4 mb-5 tablet:items-start tablet-xl:pl-20 tablet:pl-10'>
        <div className='tablet:flex gap-5'>

          <div className="tablet:flex tablet:flex-col tablet:border-r-2 tablet-xl:pr-10 tablet:pr-2 justify-end items-start">
            <p className='font-bold text-2xl '>$89,914</p>
            <p className='text-xs text-Dark-gray'>of $100,000 backed</p>
          </div>
          <hr className='w-16 border-1 mt-2.5 tablet:hidden ml-6 border-[.1rem]' />
          <div className="tablet:flex tablet:flex-col tablet:border-r-2 tablet-xl:pr-20 tablet-xl:pl-10 tablet:pr-5 tablet:pl-3 justify-end items-start">
            <p className='font-bold text-2xl mt-2'>5,007</p>
            <p className='text-xs text-Dark-gray'>total backers</p>
          </div>
          <hr className='w-16 border-1 mt-2.5 tablet:hidden ml-6 border-[.1rem]'/>
          <div className="tablet:flex tablet:flex-col tablet:pl-5 items-start">
            <p className='font-bold text-2xl mt-2'>56</p>
            <p className='text-xs text-Dark-gray'>days left</p>
          </div>
        </div>
        <div className='w-[90%] bg-gray-300 h-3 rounded-full mt-5 mb-3'>
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
            <PledgeCard title="Bamboo Stand" subTitle="Pledge $25 or more" description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list." numberLeft={101} handleSelectionClick={props.handleSelectionClick}/>
            <PledgeCard title="Black Edition Stand" subTitle="Pledge $75 or more" description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included." numberLeft={64} handleSelectionClick={props.handleSelectionClick}/>
            <PledgeCard title="Mahogany Special Edition" subTitle="Pledge $200 or more" description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included." numberLeft={0} handleSelectionClick={props.handleSelectionClick}/>
          </div>
        </div>
    </main>
  )
}
