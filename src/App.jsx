import { useState } from 'react'
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectPage';
import heroMobile from './assets/image-hero-mobile.jpg'
import heroDesktop from './assets/image-hero-desktop.jpg'

function App() {

  return (
    <div className='absolute font-commissioner text-base -z-50'>
      <Navbar /> 
      <div className="inline-block bg-gradient-to-b from-black -z-10">
        <img src={heroMobile} srcSet={`${heroMobile} 750w, ${heroDesktop} 1444w`} alt="mac desktop background image" className='relative -z-20 w-screen' />
      </div>
      <ProjectPage />
    </div>
  )
}

export default App;
