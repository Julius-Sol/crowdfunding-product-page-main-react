import { useState } from 'react'
import Navbar from './components/Navbar';
import heroMobile from './assets/image-hero-mobile.jpg'

function App() {

  return (
    <>
      <Navbar />
      <img src={heroMobile} alt="mac desktop background image" className='absolute -z-10' />
    </>
  )
}

export default App;
