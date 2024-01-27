import React from 'react'
import { Left } from '../app/components/Navbar/components/Left'
import { Right } from '../app/components/Navbar/components/Right'
import { Form } from './components/Form/Form'
import styles from './ContactPage.scss'

export const ContactPage = () => {
  return (
    <div className="ContatPage-wrapper 
    bg-slate-950 
     w-full h-full xl:px-[5%]">
    <div className='relative w-full h-auto flex-col
    border-r border-l border-[#3e3e3e]
    text-slate-950 '>
      <header className="w-full py-6 pl-8  border-l border-r border-[#3e3e3e]">
        <h2 className="text-5xl text-gray-300 pb-8  border-b border-[#3e3e3e]">Kontakt</h2>
      </header>
     <div className="content-wrapper flex h-full">
      <div className="w-1/2 h-full flex-1 border-r border-[#3e3e3e] ">
        <Left />
      </div>
      <div className="w-1/2 h-full flex-1">
        {/* <Right /> */}
        <Form />
      </div>
     </div>
    </div>
    </div>
  )
}
