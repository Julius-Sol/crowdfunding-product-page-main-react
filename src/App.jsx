import { useState } from 'react'
import Navbar from './components/Navbar';
import heroMobile from './assets/image-hero-mobile.jpg'

function App() {

  return (
    <div className='font-commissioner'>
      <Navbar /> 
      <div class="inline-block bg-gradient-to-b from-black -z-10">
        <img src={heroMobile} alt="mac desktop background image" className='relative -z-20' />
      </div>
    </div>
  )
}

export default App;
