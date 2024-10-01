import React from 'react'

function Line({vertical, customClass}) {
  return (
    <div>
        <div className={`flex ${vertical ? 'h-full' : 'w-full'} items-center justify-center ${customClass}`}>
            <span className={`bg-[#ffffff1a] ${vertical ? 'w-[2px] h-full' : 'h-[2px] w-full'}`}></span>
        </div>
    </div>
  )
}

export default Line
