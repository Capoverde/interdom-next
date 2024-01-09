import React from 'react'
import  './OfferAccordion.scss'
import AccordionData from './AccordionData.json'

export const OfferAccordion = () => {
  return (
    <div className='w-full felx-col xl:flex md:flex'>
      {AccordionData.map((data)=> (
        <div key={data.id} className="accordionBox h-full w-full relative border-r grid-border-clr cursor-pointer">
          <div className="content absolute ">
            <p className='text p-12'>  
             {data.describe}
            </p>
           </div>
           <h3 className='title text-5xl text-slate-9650 p-12 absolute bottom-3'>
            {data.title}
          </h3>
        </div>
      ))}
    </div>
  )
}

