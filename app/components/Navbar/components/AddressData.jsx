import { motion as m } from 'framer-motion'
import { centerLinkVars } from '../helpers/centerLinkVars';
import contactItems from '../NavbarData/contactItems.json'
import Link from 'next/link';


export const AddressData = () => {
    return (
      <m.div variants={centerLinkVars} className="mt-8  text-gray-200">
          <div className="xl:pb-3 w-full">
          {contactItems.map((address, id) => (
            <>
              <Link
                href="https://www.google.com/maps/place/Łódź, ul. Rewolucji 1905 r. nr 7"
                target="_blank"
                title="kliknij aby sprawdzić w google maps"
              >
               <m.div key={address.id} variants={centerLinkVars}>
                   {address.address}
               </m.div>
               <m.div className="pt-1" key={address.id} variants={centerLinkVars}>
                 <span>{address.city}</span>
               </m.div>
              </Link>
            </>
          ))}                
        </div>
      </m.div>
    );
  };