import React from 'react'
import SectionName from '../../reuse/SectionName'
import Button from '../../reuse/Button'
import TestimonyCard from './testimonyCards/TestimonyCard'
import forward from './assets/forward.svg'
import backward from './assets/backward.svg'

function Testimonial() {
  return (
    <section className='px-12 flex flex-col gap-20 max-md:px-6'>
        <div className='flex gap-16 items-center max-md:flex-col'>
            <div className='flex flex-col gap-2 w-[50%] max-md:w-full max-md:items-center'>
                <SectionName icon="chat2" label="What Our Clients Say" />
                <h2 className='text-bold-45 max-lg:text-bold-45 max-md:text-bold-30 max-sm:text-bold-22 max-md:text-center'>Real Feedback from Satisfied Customers</h2>
            </div>
            <div className='flex flex-col gap-8 w-[50%] max-md:w-full max-md:items-center'>
                <p className='text-regular max-md:text-regular-12 max-md:text-center'>Our mission is to deliver innovative, high-quality design solutions that empower businesses to achieve their full potential. We believe in the power of great design to make a lasting impact and are dedicated to providing exceptional service to our clients.</p>
                <Button label="Shedule a call" />
            </div>
        </div>
        <div className='p-12 bg-[#171717] border border-[#ffffff1a] rounded-xl flex flex-col gap-8 max-md:p-6'>
            <div>
                <TestimonyCard />
            </div>
            <div className='flex items-center justify-between'>
                <h2 className="text-bold-22">1/<span className="text-bold-16 opacity-70">4</span></h2>
                <div className='flex items-center gap-4'>
                    <button className='bg-main w-10 h-10 rounded-full relative'><img className='w-4 h-3 absolute-center' src={backward} alt="backward" /></button>
                    <button className='bg-main w-10 h-10 rounded-full relative'><img className='w-4 h-3 absolute-center' src={forward} alt="forward" /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
