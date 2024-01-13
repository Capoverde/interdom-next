import { motion as m } from 'framer-motion'
import { centerLinkVars } from '../helpers/centerLinkVars'

export  const AddressTitle = () => {
    return(
     <m.h3 className="text-2xl font-bold" variants={centerLinkVars}>Adres Biura:</m.h3>
    )
  }