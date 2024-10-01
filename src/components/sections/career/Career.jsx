import React from 'react'
import careerImg from './assets/career.png'
import Button from '../../reuse/Button'

function Career() {
  return (
    <section className='px-12 flex flex-col gap-20 max-md:px-6'>
        <div className='flex gap-16 items-center max-md:flex-col max-md:gap-8'>
            <h1 className='text-bold-60 w-[50%] max-lg:text-bold-45 max-md:text-bold-30 max-md:w-full max-md:text-center'>Great design to make a lasting impact</h1>
            <div className='w-[50%] flex flex-col gap-8 max-md:w-full max-md:items-center'>
                <p className='text-regular max-md:text-regular-12 max-md:text-center'>Our mission is to deliver innovative, high-quality design solutions that empower businesses to achieve their full potential. We believe in the power of great design to make a lasting impact and are dedicated to providing exceptional service to our clients.</p>
                <Button label="shedule a call" />
            </div>
        </div>
        <img className='w-full object-cover rounded-2xl' src={careerImg} alt="career image" />
    </section>
  )
}

export default Career
