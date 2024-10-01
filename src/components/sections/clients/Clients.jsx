import React from 'react'
import negotiatus from './assets/Negotiatus.png'
import sibuDigital from './assets/Sibu-Digital.png'
import insightsoftware from './assets/Insightsoftware.png'
import catalyzeai from './assets/Catalyzeai.png'
import imgur from './assets/Imgur-new.png'
import kinemaster from './assets/Kinemaster.png'
import leedsUnited from './assets/Leeds-United.png'
import creativeMarket from './assets/Creative-market.png'

function Clients() {
    
    const clientsLogo = 
        [negotiatus, sibuDigital, insightsoftware, catalyzeai, imgur, kinemaster, leedsUnited, creativeMarket]

  return (
    <section className='px-12 flex flex-col gap-20 items-center justify-center max-md:px-6'>
        <h2 className='text-bold-30 capitalize text-center'>Old Clients, new friends.</h2>
        <div className='flex gap-8 items-center justify-center flex-wrap max-w-[896px]'>
            {clientsLogo.map((item, index) => {
                return(
                    <img className='max-md:w-[120px]' key={index} src={item} alt="client logo" />
                )
            })}
        </div>
    </section>
  )
}

export default Clients
