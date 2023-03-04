import { useState } from 'react';
import masterLogo from '../assets/logo-mastercraft.svg'
import bookmark from '../assets/icon-bookmark.svg'
import bookmarked from '../assets/icon-bookmarked.png'

export default function ProjectInfo(props) {
  const [bookmarkSet, setBookmarkSet] = useState(false);

function bookmarkPage (){
  setBookmarkSet((prevbook)=>!prevbook)
}

  return (
    <div className='flex flex-col bg-white items-center border-[.5px] rounded-lg text-center mb-5'>
        <img src={masterLogo} alt="mastercraft logo" className='relative -top-7 max-w-[56px]' />
        <p className='relative text-base font-bold tablet:text-[1.5rem] -top-3'>Mastercraft Bamboo <br className='tablet-xl:hidden' /> Monitor Riser</p>
        <p className='text-sm text-Dark-gray px-4'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className='flex my-5 mb-8 gap-x-2 tablet:justify-between  tablet:w-[80%] tablet:mx-auto'>
          <button className='bg-Moderate-cyan hover:bg-Dark-cyan rounded-full px-10 text-white text-sm font-bold' onClick={props.handleSelectionClick}>Back this project</button>
          <div className='tablet:flex tablet:bg-gray-200 tablet:rounded-full tablet:pr-6' onClick={bookmarkPage}>
            <img src={bookmarkSet?  bookmarked : bookmark} alt="bookmark" className='max-w-[56px]' />
            <span className={`hidden tablet:block text-center self-center pl-3 ${bookmarkSet ? "text-Dark-cyan" : ""}`}>{bookmarkSet? 'Bookmarked': 'Bookmark' }</span>
          </div>
        </div>
      </div>
  )
}
