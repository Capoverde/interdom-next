import React from 'react'
import Link from 'next/link'

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='w-full flex justify-end py-1 bg-slate-950 text-gray-300 xl:px-[5%] border-t border-[#3e3e3e] overflow-hidden'>
      <div className="xl:w-1/2 xl:flex xs:w-full xs:flex-col xs:justify-center xs:items-center">
        <span className='text-gray-400 text-xs'>Copyright &copy; {year}</span>
       <Link href="#" className='ml-auto text-xs text-gray-600'>Powered by Slobinski.dev</Link>
      </div>
    </footer>
  )
}
