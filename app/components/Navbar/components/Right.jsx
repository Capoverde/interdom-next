import Link from 'next/link'
import { motion as m } from 'framer-motion'
import { MailAndPhones } from "../NavbarData/mailAndPhones";
import { Blob } from '../../Blob/Blob';
import { PhonesMailTitle } from './Headers/PhonesMailTitle';
import { containerVars } from '../helpers/containerVars';
import { centerLinkVars } from '../helpers/centerLinkVars';
import { SocialsTitle } from './Headers/SocialsTitle';

export const Right = () => {
  return (
    <div className="navbar-right-box relative w-full h-full flex-1 text-gray-300">
    {/* <Blob /> */}
    <Blob width="200px" height="150px" backgroundColor="bg-blue-500" top="10%" left="20%" />
    <div className="overflow-hidden xl:pt-24 xl:px-11">
      <PhonesMailTitle />
    </div>
    <m.div
      variants={containerVars}
      initial="initial"
      animate="open"
      exit="initial"        
      className="w-full"      
    >
      {MailAndPhones.map((item) =>(
        <div key={item.id} className="flex items-center xl:px-11 xl:pt-6 ">
          <div className="overflow-hidden">
           <m.div variants={centerLinkVars} className="mr-4">{item.icon}</m.div>
          </div>
          <div className="overflow-hidden">
            <m.div variants={centerLinkVars}>
             <Link href={`mailto:${item.mail}`} title="kliknij aby napisać maila">{item.mail}</Link>
             <Link href={`tel:${item.href}`} title="kliknij aby do nas zadzwonić">{item.phone1}</Link>
             <Link href={`tel:${item.href}`} title="kliknij aby do nas zadzwonić">{item.phone2}</Link>
            </m.div>
          </div>
        </div>
      ))}
    </m.div>
    <div className="overflow-hidden xl:px-11">
      <SocialsTitle />
    </div>
    <div className="overflow-hidden flex xl:pl-11 xl:py-5 [&>*:last-child]:ml-4">
      {MailAndPhones.map((item) => (
        <m.div variants={centerLinkVars} key={item.id} className="social-box ">
          <Link className="text-2xl" title={item.title} href={item.href} target="_blank">
            {item.socIcon}
          </Link>
        </m.div>
      ))}
    </div>
  </div>
  )
}

