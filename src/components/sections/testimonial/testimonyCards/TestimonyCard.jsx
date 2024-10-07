import React from 'react'
import testimonyGuy from '../assets/testimony.png'
import digiArt from '../assets/digi-art.png'
import TestimonyResult from './TestimonyResult'

function TestimonyCard({customClass, style}) {



  return (
    <div className={`flex gap-16 items-center max-md:flex-col ${customClass} shrink-0`} style={style}>
        <div className='w-[40%] h-full rounded-xl overflow-hidden max-md:w-full max-h-[500px]'>
            <img className='w-full h-full object-cover' src={testimonyGuy} alt="" />
        </div>
        <div className='w-[60%] flex flex-col gap-8 max-md:w-full'>
            <div className='flex flex-col gap-4'>
                <span className='flex gap-6 items-center max-md:flex-col'>
                    <img src={digiArt} alt="" />
                    <p className='text-regular max-md:text-regular-12 max-md:text-center'>( Mr. Noufel Haque, CEO & Founder )</p>
                </span>
                <p className='text-regular max-md:text-regular-12 max-md:text-center'>Establish a customer advisory board with representatives depending on the client's needs, industry.</p>
            </div>
            <div className='grid grid-cols-2 gap-6 max-md:hidden'>
                <TestimonyResult rate="5X" label="Growth in 08 months" />
                <TestimonyResult rate="3.5X" label="Google & Meta Adds" />
                <TestimonyResult rate="5.6%" label="Avg Conversion Rate" />
                <TestimonyResult rate="160K+" label="Active Online Platform" />
            </div>
        </div>
    </div>
  )
}

export default TestimonyCard
