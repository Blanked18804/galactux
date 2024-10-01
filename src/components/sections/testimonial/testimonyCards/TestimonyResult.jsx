import React from 'react'

function TestimonyResult({rate, label}) {
  return (
    <div className='flex flex-col gap-2 p-8 border border-[#ffffff1a] rounded-xl'>
        <div className='flex gap-4 items-center'>
            <svg width="24" height="24" viewBox="0 0 12 13" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"/></svg>
            <h2 className='text-bold-30'>{rate}</h2>
        </div>
        <p className="text-regular">{label}</p>
    </div>
  )
}

export default TestimonyResult
