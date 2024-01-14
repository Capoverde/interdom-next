import { motion as m } from 'framer-motion'
import { centerLinkVars } from '../helpers/centerLinkVars';
import Link from 'next/link';

export const NavLinks = ({ title, href }) => {
    return (
      <m.div variants={centerLinkVars} className={`text-5xl mt-8 uppercase  text-gray-200 `}>
        <Link className="navLink" href={href} onClick={() => {toggleMenu();}}>
          <span className="NavLinkSpan">{title}</span>
        </Link>
      </m.div>
    );
  };