import React from 'react'
import  './OfferAccordion.scss'
import AccordionData from './AccordionData.json'

export const OfferAccordion = () => {
  return (
    <div className='w-full felx-col xl:flex md:flex'>
      {AccordionData.map((data)=> (
        <div key={data.id} className="accordionBox w-full relative border-r grid-border-clr cursor-pointer ">
          <div className="content">
           <h3 className='title text-5xl text-slate-9650 p-8'>
            {data.title}
          </h3>
            <p className='text p-8'>  
             {data.describe}
            </p>
           </div>
        </div>
      ))}
    </div>
  )
}

