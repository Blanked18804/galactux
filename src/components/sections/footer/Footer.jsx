import React from 'react'
import logo from './assets/logo.svg'
import galactuxBg from './assets/galactux-bg.png'
import facebook from './assets/facebook-logo.svg'
import xLogo from './assets/x-logo.svg'
import linkedin  from './assets/linkedin-logo.svg'
import instagram from './assets/instagram-logo.svg'
import Line from '../../reuse/Line'


function Footer() {

    const socialIcon = [facebook, xLogo, linkedin, instagram]

  return (
    <section className='px-12 pb-12 max-md:px-6 max-md:pb-3'>
        <footer className='flex flex-col gap-6'>
            <div className='flex items-center justify-between max-md:flex-col max-md:gap-4'>
                <div className='w-[50%] flex flex-col gap-2 max-md:w-full max-md:items-center'>
                    <img className='size-24' src={galactuxBg} alt="galactux" />
                    <p className='text-regular max-md:text-regular-12 max-md:text-center'>Over the past 10 years, Galactux has worked with over 500 businesses, delivering top-notch design solutions that consistently hit the mark.</p>
                </div>
                <ul className='flex gap-4 items-center'>
                    {socialIcon.map((item, index) => {
                        return(
                            <li key={index} className='size-[30px] relative rounded-full bg-gradient-main'>
                                <img className='size-3 absolute-center' src={item} alt="social logo"/>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='p-12 flex justify-between items-center bg-[#171717] border border-[#ffffff1a] rounded-xl max-md:p-6 max-md:flex-col max-md:gap-8'>
                <img src={logo} alt="logo" />
                <div className='flex gap-8 max-md:flex-col max-md:gap-4'>
                    <span>
                        <p className='text-regular'>Phone</p>
                        <h2 className='text-bold-22'>+991 - 763 684 4563</h2>
                    </span>
                    <Line vertical={true} customClass="hidden"/>
                    <span>
                        <p className='text-regular'>Email Now</p>
                        <h2 className='text-bold-22'>info@examplegmail.com</h2>
                    </span>
                </div>
            </div>
            <div className='flex justify-between max-md:flex-col gap-4 items-center'>
                <p className='text-regular'>Copyright 2024 Galactux | Design By Galactux</p>
                <p className='text-regular'>Our Business <span className='underline'>Policy, Terms & Condition</span></p>
            </div>
        </footer>
    </section>
  )
}

export default Footer
