import { useState } from 'react';
import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-hamburger.svg';
import closeIcon from '../assets/icon-close-menu.svg'


const Navbar = () => {
const [openNavMenu, setOpenNavMenu] = useState(true);

const openMenu = () => {
  setOpenNavMenu((prevOpenNav)=>!prevOpenNav)
}

  return (
    <nav role="navigation" className='absolute flex flex-col'>
      <div className='w-screen flex justify-between py-6 px-5'>
        <img src={logo} alt="logo" />
        {openNavMenu? <img src={hamburger} alt="menu icon" className='py-1' onClick={openMenu}/> : <img src={closeIcon} alt="Close Button" className='py-1' onClick={openMenu}/> }
      </div>
      <div className={openNavMenu? 'hidden': 'fixed flex flex-col self-center w-screen border-b-2.1 px-5 top-20'}>
        <ul className='bg-white rounded-lg'>
          <li className='border-b-[.12rem] py-5 px-5 '><a href="#">About</a></li>
          <li className='border-b-[.12rem] py-5 px-5'><a href="#">Discover</a></li>
          <li className='py-5 px-5'><a href="#">Get Started</a></li>
        </ul>
      </div>
    </nav>
  );
} 

export default Navbar;