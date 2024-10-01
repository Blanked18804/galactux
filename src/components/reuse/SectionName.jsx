import React from 'react'
import spark from '../../assets/spark.svg'
import chat from '../../assets/chat.svg'
import galactuxG from '../../assets/galactux-g.svg'
import hat from '../../assets/hat.svg'
import chat2 from '../../assets/chat-2.svg'

function SectionName({icon, label}) {

    const imgSrc = {
        spark: spark,
        chat: chat,
        galactuxG: galactuxG,
        hat: hat,
        chat2: chat2,
    }[icon];

  return (
    <div className='py-1 px-4 bg-gradient-main flex items-center gap-2 w-max border border-main rounded-full max-sm:max-w-64'>
        <img className='w-4 h-4' src={imgSrc} alt="img" />
        <p className='text-regular max-md:text-regular-12 max-md:text-center capitalize'>{label}</p>
    </div>
  )
}

export default SectionName
