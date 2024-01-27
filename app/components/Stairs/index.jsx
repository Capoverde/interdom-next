import React from 'react'
import { motion as m } from 'framer-motion';
import { opacity, expand } from './anim';
import './Stairs.scss'

export default function Layout({children, backgroundColor}) {

    const anim = (variants, custom=null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 3
    return (
        <div className='page stairs' style={{backgroundColor}}>
            <m.div {...anim(opacity)} className='transition-background'/>
            <div className='transition-container'>
                {
                    [...Array(nbOfColumns)].map( (_, i) => {
                        return (
                            <m.div key={i} {...anim(expand, nbOfColumns - i)}/>
                        ) 
                    })
                }
            </div>
            {
                children
            }
        </div>
    )
}