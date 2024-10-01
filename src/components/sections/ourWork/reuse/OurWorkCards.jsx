import React from 'react'
import Button from '../../../reuse/Button'
import container1 from '../assets/Container-1.png'
import container2 from '../assets/Container-2.png'
import container3 from '../assets/Container-3.png'
import container4 from '../assets/Container-4.png'
import container5 from '../assets/Container-5.png'
import container6 from '../assets/Container-6.png'
import container7 from '../assets/Container-7.png'
import container8 from '../assets/Container-8.png'
import container9 from '../assets/Container-9.png'

function OurWorkCards({imgName}) {

    const imgSrc = {
        container1: container1,
        container2: container2,
        container3: container3,
        container4: container4,
        container5: container5,
        container6: container6,
        container7: container7,
        container8: container8,
        container9: container9,
    }[imgName];

  return (
    <div className=''>
        <img src={imgSrc} alt="" />
        <Button label="check now"/>
    </div>
  )
}

export default OurWorkCards
