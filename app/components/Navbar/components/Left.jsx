import React from 'react'
import { motion as m } from 'framer-motion'
import  contactItems  from '../NavbarData/contactItems.json'
import { Blob } from '../../Blob/Blob'
import { boxVars } from '../helpers/boxVars'
import { containerVars } from '../helpers/containerVars'
import { centerLinkVars } from '../helpers/centerLinkVars'
import { AddressTitle } from './Headers/AddressTitle'
import { AddressData } from './AddressData'
import { WorkHoursTitle } from './Headers/WorkHoursTitle'

export const Left = () => {
  return (
    <m.div className="xl:pt-24 w-full h-full flex-1 xl:border-r relative border-[#3e3e3e] xl:px-11 text-gray-300"
    variants={boxVars}
    initial="initial"
    animate="open"
    exit="initial"
  >
    {/* <Blob /> */}
    <Blob width="200px" height="150px" backgroundColor="bg-blue-500" top="30%" left="20%" />
    <div className="overflow-hidden" >
      <AddressTitle />
    </div>
    <div className="overflow-hidden" >
      <AddressData />
    </div>
    <div className="overflow-hidden">
      <WorkHoursTitle />
    </div>
    <div>
      {contactItems.map((item, id)=>(
        <m.div className="flex justify-between overflow-hidden" 
               key={item.id}
               variants={containerVars}
               initial="initial"
               animate="open"
               exit="initial"                         
               >
          <m.div variants={centerLinkVars} className="xl:py-2">{item.day}</m.div>
          <m.div variants={centerLinkVars} className="xl:py-2 xl:pr-[4rem]">{item.hours}</m.div>
        </m.div>
      ))}
    </div>
    <div>
     {contactItems.map((info)=>(
        <m.div className="overflow-hidden" 
         key={info.id}
         variants={containerVars}
         initial="initial"
         animate="open"
         exit="initial"                         
        >              
          <m.div variants={centerLinkVars} className="text-xs text-gray-500 text-left pr-[4rem]">
          <sup className="text-red-500">{info.prefix}</sup>
            {info.info}
          </m.div>
        </m.div>  
      ))}
    </div>
  </m.div>
  )
}
