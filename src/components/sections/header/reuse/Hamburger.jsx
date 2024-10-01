import React from 'react'

function Hamburger({onClick, active, maxLg}) {
  return (
    <button onClick={onClick} className={`flex-col gap-3 hidden ${maxLg}`}>
        <span style={{transform: active ? 'rotate(45deg) translate(5px, 5px)' : ''}} className='w-8 h-[0.125rem] bg-[#FF2966]'></span>
        <span style={{transform: active ? 'rotate(-45deg) translate(5px, -5px)' : ''}} className='w-8 h-[0.125rem] bg-[#FF2966]'></span>
    </button>
  )
}

export default Hamburger
