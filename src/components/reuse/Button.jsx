import React from 'react'

function Button({label, maxLg, customClass}) {
  return (
    <button className={`pr-4 pl-8 bg-main text-[1rem] border-none rounded-full flex items-center w-max font-[Unbounded] capitalize ${maxLg} ${customClass}`}>
        <span>{label}</span>
        <span className="rounded-full p-4 overflow-hidden"><svg width="12" height="12" viewBox="0 0 12 13" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"/></svg></span>
    </button>
  )
}

export default Button
