import React from 'react'
import { motion as m } from 'framer-motion'
import { OfferAccordion } from '@/app/components/OfferAccordion/OfferAccordion'
import styles from './Offer.scss'

export const Offer = () => {
  return (
    <div className='flex-col grow w-full h-[100vh]  xl:mx-[5%] md:mx-[5%] border-r border-l grid-border-clr '> 
      <header className='w-full py-4 border-b grid-border-clr'>
        <h2 className='text-5xl pl-8 py-6'>Nasza Oferta</h2>
      </header>
       <OfferAccordion /> 
    </div>
  )
}
