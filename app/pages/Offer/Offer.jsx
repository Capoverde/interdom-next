import React from 'react'
import { motion as m } from 'framer-motion'
import { OfferAccordion } from '@/app/components/OfferAccordion/OfferAccordion'
import styles from './Offer.scss'

export const Offer = () => {
  return (
    <div className="OfferPage-wrapper h-full w-full xl:px-[5%]">
    <div className='w-full h-screen border-r border-l grid-border-clr overflow-hidden mb-10'> 
      <header className='w-full py-4 border-b grid-border-clr'>
        <h2 className='text-5xl pl-8 py-6 '>Nasza Oferta</h2>
      </header>
       <OfferAccordion /> 
    </div>
    </div>
  )
}
