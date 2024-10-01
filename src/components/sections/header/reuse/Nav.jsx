import React from 'react'

function Nav({maxLg, ulMaxlg}) {
    const nav = ["Home", "About Us", "Portfolio", "Pricing"]
    function starSvg(){
        return(
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M7.36899 0.5C7.50566 4.30794 10.561 7.36333 14.369 7.5C10.561 7.63667 7.50566 10.6921 7.36899 14.5C7.23231 10.6921 4.17693 7.63667 0.368988 7.5C4.17693 7.36333 7.23231 4.30794 7.36899 0.5Z"/></svg>
        )
    }
  return (
    <nav className={`right-0 top-0 ${maxLg}`}>
        <ul className={`flex gap-8 items-center ${ulMaxlg}`}>
            {nav.map((item, index) => {
                return(
                    <li key={index}><a href="" className='flex items-center gap-1 group'><span className={`${index === 0 ? "block" : "hidden"} group-hover:block `}>{starSvg()}</span><span>{item}</span></a></li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Nav
