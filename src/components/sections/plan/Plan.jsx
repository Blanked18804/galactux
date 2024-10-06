import React from 'react'
import ToggleBtn from './reuse/ToggleBtn'
import ticked from './assets/ticked.png'
import Line from '../../reuse/Line'
import Button from '../../reuse/Button'

function Plan() {

    const included = ["Unlimited brands", "One request at a time", "Average 48-hour delivery", "Pause or cancel anytime"];

    const addOns = ["Wordpress Development ($500)", "Framer Development ($500)", "Webflow Development ($500)"]

  return (
    <section className='px-12 flex flex-col gap-20 max-md:px-6'>
        <div className='flex flex-col gap-4 items-center'>
            <h2 className='text-bold-60 w-[70%] text-center max-lg:text-bold-45 max-md:w-full max-md:text-bold-30 max-sm:text-bold-22'>Simple, Flexible, and Effective</h2>
            <p className='text-regular w-[70%] text-center max-md:w-full'>Get your designs done effortlessly.. Enjoy excellent designs that elevate your brand, without the complexity.</p>
        </div>
        <div className='p-12 mx-12 flex flex-col gap-6 bg-[#171717] border border-[#ffffff1a] rounded-xl max-md:mx-0 max-md:p-6'>
            <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:items-start'>
                <h2 className='text-bold-30 max-md:text-bold-22'>One Plan,<br />Endless Possibilities</h2>
                <span className='flex gap-4 items-center max-md:flex-col max-md:items-start'>
                    <h2 className="text-bold-16">Monthly</h2>
                    <ToggleBtn active={true} />
                    <h2 className="text-bold-16">Yearly (-20% Save)</h2>
                </span>
            </div>
            <Line vertical={false} />
            <div className='flex justify-between max-md:flex-col max-md:gap-4'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-bold-16'>What’s Included :</h2>
                    <ul>
                        {included.map((item, index) => {
                            return(
                                <li key={index} className='flex gap-2 items-center'>
                                    <img className='size-3' src={ticked} alt="ticked" /><p className='text-regular max-md:text-regular-12'>{item}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Line vertical={true} />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-bold-16'>What’s Included :</h2>
                    <ul className='flex flex-col gap-1'>
                        {addOns.map((item, index) => {
                            return(
                                <li key={index} className='flex gap-2 items-center'>
                                    <ToggleBtn active={index === 0} /><p className='text-regular max-md:text-regular-12'>{item}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <Line vertical={false} />
            <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:items-start'>
                <h2 className='text-bold-45 max-md:text-bold-30'>$2500<span className='text-regular opacity-70'>/per month</span></h2>
                <Button label="Subscribe" />
            </div>
        </div>
        <div className='p-12 mx-12 flex justify-between items-center bg-[#171717] border border-[#ffffff1a] rounded-xl max-md:mx-0 max-md:-p-6 max-md:flex-col max-md:gap-4'>
            <h2 className='text-bold-45 max-md:text-bold-22'>Have any question?</h2>
            <Button label="shedule a call" />
        </div>
    </section>
  )
}

export default Plan
