import React from 'react'
import  businessGrowth from '../assets/business-growth.png'
import  onlineRevenue from '../assets/online-revenue.png'
import  organicTraffic from '../assets/organic-traffic.png'
import  setUp from '../assets/set-up.png'
import  oldWay from '../assets/old-way.png'
import  newWay from '../assets/new-way.png'

function CardData({imgIcon, heading, label}) {

    const imgSrc = {
        businessGrowth: businessGrowth,
        onlineRevenue: onlineRevenue,
        organicTraffic: organicTraffic,
        setUp: setUp,
        oldWay: oldWay,
        newWay: newWay,
    }[imgIcon];

  return (
    <div className='flex flex-col gap-4 max-md:items-center'>
      <img className='h-20 w-20' src={imgSrc} alt="" />
      <h2 className='text-bold-30 max-md:text-center max-md:text-bold-16'>{heading}</h2>
      <p className='text-regular max-md:text-center max-md:text-regular-12'>{label}</p>
    </div>
  )
}

export default CardData
