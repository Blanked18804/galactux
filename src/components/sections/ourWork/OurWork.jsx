import React, { useEffect } from 'react'
import SectionName from '../../reuse/SectionName'
import Button from '../../reuse/Button'
import container1 from './assets/Container-1.png'
import container2 from './assets/Container-2.png'
import container3 from './assets/Container-3.png'
import container4 from './assets/Container-4.png'
import container5 from './assets/Container-5.png'
import container6 from './assets/Container-6.png'
import container7 from './assets/Container-7.png'
import container8 from './assets/Container-8.png'
import container9 from './assets/Container-9.png'

function OurWork() {

    const tags = [
        {active: true, tagNameId: '1', tagName: 'All'}, 
        {active: false, tagNameId: '2', tagName: 'Branding'}, 
        {active: false, tagNameId: '3', tagName: 'UI/UX'}, 
        {active: false, tagNameId: '4', tagName: 'Web'}, 
        {active: false, tagNameId: '5', tagName: 'Graphics'},
    ]

    const cards = [
        {tagId: '3', conetentImg: container1},
        {tagId: '4', conetentImg: container2},
        {tagId: '5', conetentImg: container3},
        {tagId: '3', conetentImg: container4},
        {tagId: '2', conetentImg: container5},
        {tagId: '4', conetentImg: container6},
        {tagId: '5', conetentImg: container7},
        {tagId: '2', conetentImg: container8},
        {tagId: '2', conetentImg: container9},
    ]

  return (
    <section className='px-12 flex flex-col gap-20 max-md:px-6'>
        <div className='flex flex-col gap-4 items-center'>
            <div className='flex flex-col gap-2 items-center'>
                <SectionName icon="hat" label="Our Work" />
                <h1 className='text-bold-60 capitalize text-center max-lg:text-bold-45 max-md:text-bold-30 max-sm:text-bold-22'>See Our Designs in Action</h1>
            </div>
            <p className='text-regular w-[70%] text-center max-md:w-full max-md:text-regular-12'>Explore a selection of our best projects and witness how Galactux hits the mark every time. Our portfolio showcases a diverse range of creative solutions tailored to meet the unique needs of our clients.</p>
        </div>
        <div className='flex flex-col gap-8 items-center'>
            <div className='bg-black p-4 border border-[#ffffff1a] rounded-full w-fit max-w-full flex gap-4 flex-wrap justify-center items-center'>
                {tags.map((item, index) =>{ 
                    return(
                        <span key={index} tagnameid={item.tagNameId} className={`filterTag ${ item.active ? "bg-main" : "bg-[#171717]"} b py-2 px-4 border border-[#ffffff1a] rounded-full text-regular max-md:text-regular-12`}>{item.tagName}</span>
                    )
                })}
            </div>
            <div className='grid grid-cols-3 gap-6 max-md:grid-cols-2'>
                {cards.map((item, index) => {
                    return(
                        <div key={index} tagid={item.tagId} className='productCard rounded-2xl overflow-hidden relative group'>
                            <img className='w-full object-cover group-hover:opacity-30 transition-all duration-300' src={item.conetentImg} alt="" />
                            <Button customClass="absolute-center hidden duration-300 group-hover:flex" label="check now"/>
                        </div>
                    )
                } )}
            </div>
        </div>
    </section>
  )
}

export default OurWork
