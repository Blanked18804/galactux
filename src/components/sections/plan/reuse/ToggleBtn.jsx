import React, { useState } from 'react'

function ToggleBtn({active}) {
    
    const [isActive, setIsActive] = useState(active);

    const toggleBtnClicked = () => {
        isActive ? setIsActive(!isActive) : setIsActive(!isActive)
    }

    return(
        <button className={`toggle-btn w-12 h-6 border-2 border-white rounded-full ease-out relative ${isActive ? `bg-main after:right-1` : `bg-[#747474] after:translate-x-[-18px]`} after:absolute after:content-[''] after:size-3 after:rounded-full after:bg-white after:top-[50%] after:translate-y-[-50%] after:transition-all duration-300 after:ease-out`} onClick={toggleBtnClicked}></button>
    )
}

export default ToggleBtn
