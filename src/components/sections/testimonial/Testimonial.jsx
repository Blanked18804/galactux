import React, { useEffect, useState } from 'react';
import SectionName from '../../reuse/SectionName';
import Button from '../../reuse/Button';
import TestimonyCard from './testimonyCards/TestimonyCard';
import forward from './assets/forward.svg';
import backward from './assets/backward.svg';

function Testimonial() {
    const [testimonyCardWidth, setTestimonyCardWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 5;
    useEffect(() => {
        const handleResize = () => {
            testimonyWidth();
        };
        window.addEventListener('resize', handleResize);
        testimonyWidth();
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function testimonyWidth() {
        const testimony = document.querySelector("#testimony");
        const testimonyWidth = testimony.offsetWidth;
        const testimonyPadding = parseInt(window.getComputedStyle(testimony).padding);
        const totalWidth = testimonyWidth - (testimonyPadding + testimonyPadding) - 2;
        setTestimonyCardWidth(totalWidth);
    }

    const dynamicWidthStyle = {
        width: `${testimonyCardWidth}px`
    };

    const handleForward = () => {
        if (currentIndex < totalCards - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const testimonyCardHolderStyle = {
        transform: `translateX(-${currentIndex * (testimonyCardWidth + 64)}px)`,
        transition: 'transform 0.7s ease'
    };

    return (
        <section className='px-12 flex flex-col gap-20 max-md:px-6'>
            <div className='flex gap-16 items-center max-md:flex-col'>
                <div className='flex flex-col gap-2 w-[50%] max-md:w-full max-md:items-center'>
                    <SectionName icon="chat2" label="What Our Clients Say" />
                    <h2 className='text-bold-45 max-lg:text-bold-45 max-md:text-bold-30 max-sm:text-bold-22 max-md:text-center'>Real Feedback from Satisfied Customers</h2>
                </div>
                <div className='flex flex-col gap-8 w-[50%] max-md:w-full max-md:items-center'>
                    <p className='text-regular max-md:text-regular-12 max-md:text-center'>Our mission is to deliver innovative, high-quality design solutions that empower businesses to achieve their full potential. We believe in the power of great design to make a lasting impact and are dedicated to providing exceptional service to our clients.</p>
                    <Button label="Schedule a call" />
                </div>
            </div>
            <div id='testimony' className='p-12 bg-[#171717] border border-[#ffffff1a] overflow-hidden w-full rounded-xl flex flex-col gap-8 max-md:p-6'>
                <div id='testimony-card-holder' className='flex gap-16' style={{ ...dynamicWidthStyle, ...testimonyCardHolderStyle }}>
                    <TestimonyCard customClass="testimony-card" style={dynamicWidthStyle}/>
                    <TestimonyCard customClass="testimony-card" style={dynamicWidthStyle}/>
                    <TestimonyCard customClass="testimony-card" style={dynamicWidthStyle}/>
                    <TestimonyCard customClass="testimony-card" style={dynamicWidthStyle}/>
                    <TestimonyCard customClass="testimony-card" style={dynamicWidthStyle}/>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className="text-bold-22">{currentIndex + 1} / <span className='text-bold-16 opacity-70'>{totalCards}</span></h2>
                    <div className='flex items-center gap-4'>
                        <button onClick={handleBack} className='bg-main w-10 h-10 rounded-full relative' disabled={currentIndex === 0}>
                            <img className='w-4 h-3 absolute-center' src={backward} alt="backward" />
                        </button>
                        <button onClick={handleForward} className='bg-main w-10 h-10 rounded-full relative' disabled={currentIndex === totalCards - 1}>
                            <img className='w-4 h-3 absolute-center' src={forward} alt="forward" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
