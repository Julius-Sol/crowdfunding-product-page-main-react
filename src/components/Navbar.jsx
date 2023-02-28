import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'


const Navbar = () => {
  return (
    <nav role="navigation" className='absolute w-screen flex justify-between py-10 px-5 '>
      <img src={logo} alt="logo" />
      <img src={hamburger} alt="menu icon" className='py-1'/>
      <div className='hidden text-white'>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Discover</a></li>
          <li><a href="">Get Started</a></li>
        </ul>
      </div>
    </nav>
  );
} 

export default Navbar;