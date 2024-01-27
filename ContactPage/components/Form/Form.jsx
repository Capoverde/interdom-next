import React from 'react'

export const Form = () => {
  return (
    <form className='xl:px-8 w-full h-auto bg-red-300'>
        <div className="row flex w-full gap-3">
            <input className=" w-1/2 bg-transparent xl:p-1"
             type="text" 
             name="name" 
             id="name" 
             placeholder='Imię'
            />
            <input className=" w-1/2 bg-transparent xl:p-1"
             type="text" 
             name="lastName" 
             id="lastName" 
             placeholder='Nazwisko'
            />
        </div>
        <div className="row flex">
            <input type="email" name="email" id="email"  placeholder="e-mail" />
        </div>
        <textarea name="message" id="" cols="30" rows="10" placeholder="Wiadomość..."></textarea>
        <div className="row flex w-full">
            <button type="submit">Wyślij</button>
        </div>
    </form>
  )
}

