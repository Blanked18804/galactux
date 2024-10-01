import React from 'react'
import logo from '../../../assets/logo.svg'
import logoSmall from '../../../assets/galactux-white.svg'
import Button from '../../reuse/Button'
import Nav from './reuse/Nav'
import Hamburger from './reuse/Hamburger'

function Header() {
  
  function showSideBar(){
    const sideBar = document.querySelector("#sideBar");
    sideBar.classList.add("top-0");
    sideBar.classList.remove("top-[-100vh]");
    document.body.style.overflowY = "hidden";
  }
  function hideSideBar(){
    const sideBar = document.querySelector("#sideBar");
    sideBar.classList.add("top-[-100vh]");
    sideBar.classList.remove("top-0");
    document.body.style.overflowY = "unset";
  }

  return (
    <section className='bg-black fixed w-full z-50 px-6 py-4 max-md:px-3'>
        <header className='flex w-full items-center justify-between'>
            <img className='max-md:hidden' src={logo} alt="logo" />
            <img className='hidden max-md:inline-block h-[40px]' src={logoSmall} alt="logo" />
            <Nav maxLg="max-lg:hidden"/>
            <Button label="Schedule a call" maxLg="max-lg:hidden"/>
            <Hamburger onClick={showSideBar} maxLg="max-lg:flex"/>
            <div id='sideBar' className='fixed top-[-100vh] bg-black w-full h-screen flex flex-col gap-16 items-center justify-center transition-all duration-700 ease-in lg:hidden max-lg:flex'>
              <Hamburger onClick={hideSideBar} maxLg="max-lg:flex" active={true}/>
              <Nav ulMaxlg="max-lg:flex-col max-lg:item-center"/>
            </div>
        </header>
    </section>
  )
}

export default Header
