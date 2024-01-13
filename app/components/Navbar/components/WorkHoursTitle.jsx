import { motion as m } from 'framer-motion'
import { centerLinkVars } from '../helpers/centerLinkVars'

export   const WorkHoursTitle = () => {
    return(
     <m.h3 className="text-2xl font-bold xl:py-4" variants={centerLinkVars}> Dni i godziny pracy biura:<sup className="text-red-500">*</sup></m.h3>
    )
  }