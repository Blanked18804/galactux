import React, { useEffect } from 'react'
import SectionName from '../../reuse/SectionName'
import DiscoverGridCarrd from './reuse/DiscoverGridCarrd'
import gridBg from './assets/grid-bg.png'
import galactuxWhite from './assets/galactux-white.svg'

function Discover() {

  useEffect(() => {
    heightCalc();
    window.addEventListener('reset', heightCalc())

    return () => {
      window.removeEventListener('resize', heightCalc);
    };
  },[] );

  function heightCalc(){
    const galactuxGridWidth = document.querySelector("#galactux-grid").offsetWidth;
    const galactuxGridCircles = document.querySelectorAll(".galactux-grid-circle");
    let galactuxGridCirclesWidth = galactuxGridWidth + 200;
    galactuxGridCircles.forEach((circle)=>{
      circle.style.width = `${galactuxGridCirclesWidth}px`
      circle.style.height = `${galactuxGridCirclesWidth}px`  
      console.log("u changed the screen size")
    })
  }

  let gridBoxStyle = "bg-[#171717] border border-[#ffffff1a] rounded-[10px] overflow-hidden"

  return (
    <section className='px-16 flex flex-col gap-20 max-md:px-6'>
        <div className='flex flex-col gap-2 items-center'>
            <SectionName icon="galactuxG" label="Why Choose Galactux?"/>
            <h1 className='text-bold-60 text-center max-lg:text-bold-45 max-md:text-bold-30 max-sm:text-bold-22'>Discover the Benefits of Our Design Service</h1>
        </div>
        <div class="grid grid-cols-6 gap-5">

            <div class={`${gridBoxStyle} col-span-2 row-span-2 row-start-1 max-md:col-span-3 max-sm:col-span-6 `}><DiscoverGridCarrd imgIcon="requests" heading="Unlimited Design Requests" label="You're wondering if you'll ever run out of ideas. With us, you won't."/></div>
            
            <div id='galactux-grid' class={`${gridBoxStyle} col-span-2 row-span-3 relative max-md:row-start-5 max-md:row-span-1 max-md:col-span-6 max-md:max-h-96 max-sm:hidden`}>
              <div className='galactux-grid-circle absolute left-[50%] -translate-x-[50%] -top-[30%] z-10 rounded-full bg-discover-grid-circle-gradient rotate-90 border-2 border-main max-lg:-top-[25%] max-md:-left-[40%] max-md:top-[50%] max-md:-translate-y-[50%] max-md:rotate-0 max-md:max-h-[500px]' style={{background: 'linear-gradient(90deg, rgba(255, 41, 102, 0.00) 75%, rgba(255, 41, 102, 0.20) 100%), #171717'}}></div>
              <img className='w-full h-full object-cover mix-blend-lighten' src={gridBg} alt="bg" />
              <img className='absolute-center -translate-y-[50%]' src={galactuxWhite} alt="compony logo" />
              <div className='galactux-grid-circle absolute right-[50%] translate-x-[50%] -bottom-[30%] z-10 rounded-full -rotate-90 border-2 border-main max-lg:-bottom-[25%] max-md:-right-[40%] max-md:top-[50%] max-md:-translate-y-[50%] max-md:rotate-180 max-md:max-h-[500px]' style={{background: 'linear-gradient(90deg, rgba(255, 41, 102, 0.00) 75%, rgba(255, 41, 102, 0.20) 100%), #171717'}}></div>
            </div>

            <div class={`${gridBoxStyle} col-span-2 row-span-1 max-md:row-start-3 max-md:col-span-3 max-sm:col-span-6 max-sm:row-start-3`}><DiscoverGridCarrd imgIcon="speedLimit" heading="Fast Turnaround Time" label="Our average 48-hour delivery means you’ll never be left waiting." /></div>

            <div class= {`${gridBoxStyle} col-span-2 row-start-3 overflow-hidden max-md:col-span-3 max-sm:col-span-6 max-sm:row-start-7`}><DiscoverGridCarrd imgIcon="chats" heading="1 on 1 Communication" label="Enjoy seamless communication and quick responses."/></div>

            <div class={`${gridBoxStyle} col-span-2 row-span-2 max-md:col-start-4 max-md:col-span-3 max-md:row-start-1 max-sm:col-span-6 max-sm:row-start-5`}><DiscoverGridCarrd imgIcon="unlimitedBrands" heading="Unlimited Brands" label="Submit requests for any number of brands without any extra cost."/></div>

            <div class= {`${gridBoxStyle} col-span-3 row-span-2 max-sm:col-span-6 max-sm:row-start-9`}><DiscoverGridCarrd imgIcon="consistantQuality" heading="Pause or Cancel Anytime" label="Your needs change, and we get that. Pause or cancel your subscription at any time."/></div>

            <div class={`${gridBoxStyle} col-span-3 row-span-2 max-sm:col-span-6 max-sm:row-start-11`}><DiscoverGridCarrd imgIcon="galactuxTextShadow" heading="Pause or Cancel Anytime" label="Your needs change, and we get that. Pause or cancel your subscription at any time."/></div>

        </div>
    </section>
  )
}

export default Discover
