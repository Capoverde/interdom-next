import React from 'react'
import  './OfferAccordion.scss'
import AccordionData from './AccordionData.json'

export const OfferAccordion = () => {
  return (
    <div className='w-full felx-col xl:flex md:flex'>
      {AccordionData.map((data)=> (
        <div key={data.id} className="accordionBox w-full relative border-r grid-border-clr cursor-pointer overflow-hidden ">
          <div className="content w-full h-full">
           <h3 className='offerTitle text-[4rem] text-gray-200 p-8'>
            {data.title}
          </h3>
            <p className='offerText p-8 text-gray-200 z-[30] opacity-0 '>  
             {data.describe}
            </p>
           </div>
        </div>
      ))}
    </div>
  )
}

