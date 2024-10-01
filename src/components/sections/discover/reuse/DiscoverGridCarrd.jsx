import React from 'react'
import requests from '../assets/requests.png'
import speedLimit from '../assets/speed-limit.png'
import chats from '../assets/chats.png'
import unlimitedBrands from '../assets/unlimited-brands.png'
import consistantQuality from '../assets/consistant-quality.png'
import galactuxTextShadow from '../assets/galactux-text-shadow.png'

function DiscoverGridCarrd({imgIcon, heading, label}) {

    const imgSrc = {
        requests: requests,
        speedLimit: speedLimit,
        chats: chats,
        unlimitedBrands: unlimitedBrands,
        consistantQuality: consistantQuality,
        galactuxTextShadow: galactuxTextShadow,
    }[imgIcon];

  return (
    <div className='flex flex-col gap-4'>
        <img className='w-full object-cover' src={imgSrc} alt="image" />
        <div className='flex flex-col gap-2 p-4'>
            <h2 className='text-bold-16 '>{heading}</h2>
            <p className='text-regular max-md:text-regular-12'>{label}</p>
        </div>
    </div>
  )
}

export default DiscoverGridCarrd
