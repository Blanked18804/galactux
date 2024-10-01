import React from 'react'
import SectionName from '../../reuse/SectionName'
import CardData from './reuse/CardData'

function AboutUs() {

    let gridBoxClass = 'bg-[#171717] p-12 border border-[#ffffff1a] rounded-[10px] overflow-hidden max-md:p-6'

  return (
    <section className='px-12 flex flex-col gap-20 max-md:px-6'>
        <div className='flex flex-col items-center gap-4'>
            <div className='flex flex-col gap-2 items-center'>
                <SectionName icon="chat" label="Innovative Design Solutions for Modern Businesses"/>
                <h1 className='text-bold-60 capitalize max-lg:text-bold-45 max-md:text-bold-30 max-sm:text-bold-22'>Who We Are</h1>
            </div>
            <p className='text-regular capitalize text-center max-md:text-regular-12'>Innovative Design Solutions for Modern Businesses</p>
        </div>
        <div className='grid grid-cols-3 gap-5'>
            <div className={`${gridBoxClass} col-span-3 row-span-1 relative  flex flex-col gap-20 max-md:items-center max-md:gap-10`}>
                <h2 className='text-bold-30 w-[50%] max-lg:text-bold-22 max-lg:w-full max-md:text-center'>Committed to helping businesses thrive with creative solutions for their unique needs.</h2>
                <div className='flex gap-16 flex-wrap max-md:items-center max-md:justify-center'>
                    <CardData imgIcon="businessGrowth" heading="2X" label="Business Growth" />
                    <CardData imgIcon="onlineRevenue" heading="1.6X" label="Online Revenue" />
                    <CardData imgIcon="organicTraffic" heading="3X" label="Organic Traffic" />
                </div>
                <div className='absolute top-12 -right-40 bg-black size-[700px] rounded-full shadow-[inset_0px_6px_54px_0px_#FFF,inset_0px_66px_144px_0px_#FF2966,inset_0px_0px_250px_0px_#262626] z-0 max-lg:hidden'></div>
            </div>
            <div className={`${gridBoxClass} col-span-1 row-span-1 max-md:col-span-3`}>
                <CardData imgIcon="setUp" heading="Set-up" label="Why do we need innovative design solutions? In today's fast-paced digital landscape, standing out requires more than just good design. It demands creativity, agility, and a deep understanding of your brand's unique voice." />
            </div>
            <div className={`${gridBoxClass} col-span-1 row-span-1 max-md:col-span-3`}>
                <CardData imgIcon="oldWay" heading="Old way" label="For years, our teams have witnessed businesses struggle with traditional design agencies. The process was often slow, expensive, and filled with endless back-and-forths, leaving clients frustrated and delaying their growth." />
            </div>
            <div className={`${gridBoxClass} col-span-1 row-span-1 max-md:col-span-3`}>
                <CardData imgIcon="newWay" heading="New way" label="Why do we need innovative design solutions? In today's fast-paced digital landscape, standing out requires more than just good design. It demands creativity, agility, and a deep understanding of your brand's unique voice." />
            </div>
        </div>
    </section>
  )
}

export default AboutUs
