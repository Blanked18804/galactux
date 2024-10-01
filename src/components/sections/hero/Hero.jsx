import React from 'react'
import Header from '../header/Header'
import SectionName from '../../reuse/SectionName'
import Button from '../../reuse/Button'
import './Hero.css'

function Hero() {
  return (
    <section className='w-full h-screen relative'>
        <div id='circle-bg' className='bg-none rounded-full absolute bottom-4 -z-10'></div>
        <Header />
        <div className='px-12 flex flex-col gap-8 items-center justify-center h-full max-md:px-6'>
            <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col gap-2 items-center'>
                    <SectionName icon="spark" label="Revolutionize Your Brand!" />
                    <h1 className='text-bold-60 capitalize text-center max-lg:text-bold-45 max-md:text-bold-30 max-sm:text-bold-22'>Unlimited design requests.<br /> Unlimited revisions.</h1>
                </div>
                <p className='text-regular w-[70%] text-center max-md:text-regular-12 max-md:w-full'>We've made it simple and believable: No contracts, no hidden fees. Experience frictionless design with our user-friendly process.</p>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <Button label="Get Started" />
                <p className='text-regular text-center max-md:text-regular-12 max-md:w-full'>Cancel anytime with our 100% satisfaction guarantee.</p>
            </div>
        </div>
    </section>
  )
}

export default Hero
