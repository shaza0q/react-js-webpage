import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Menu=()=>(
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#cval'>What is Medoc</a></p>
    <p><a href='#products'>Our Services</a></p>
    <p><a href='#contact'>Contact us</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu]=useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links-container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color= '#fff' size={27} onClick={()=>setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
        }

        {toggleMenu && (
          <div className='gpt3__navbar-menu-container scale-up-center'>
            <div className='gpt3__navbar-menu-container-links'>
              <Menu/>
              <div className='gpt3__navbar-menu-container-links-sign'>
                <p>Sign in</p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
