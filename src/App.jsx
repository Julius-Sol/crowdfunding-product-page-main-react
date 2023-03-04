import { useState } from 'react'
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectPage';
import heroMobile from './assets/image-hero-mobile.jpg'
import heroDesktop from './assets/image-hero-desktop.jpg'
import ModalPledgeSelection from './components/ModalPledgeSelection';
function App() {

  const [selectionShow, setSelectionSet] = useState(false);

  function showSelectionModal(){
    setSelectionSet(true)
  }

  function hideSelectionModal(){
    setSelectionSet(false)
  }



  return (
    <div className='absolute font-commissioner text-base -z-50 '>
      <ModalPledgeSelection handleSelectionClick={hideSelectionModal} showModal={selectionShow}/>
      <div className={`${selectionShow ? 'relative z-100 bg-[rgba(0,0,0,0.5)]' : 'relative -z-40 bg-[rgba(0,0,0,0.0)'}`}>
        <Navbar /> 
        <div className="inline-block bg-gradient-to-b from-black -z-10">
          <img src={heroMobile} srcSet={`${heroMobile} 750w, ${heroDesktop} 1444w`} alt="mac desktop background image" className='relative -z-20 w-screen' />
        </div>
        <ProjectPage handleSelectionClick={showSelectionModal} />
      </div>
    </div>
  )
}

export default App;
