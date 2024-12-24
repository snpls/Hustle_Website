import React, { ButtonHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'

const buttonCVA = cva('rounded-lg px-6 py-2 font-semibold inline',{
    variants: {
        variant: {
            primary: 'bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:scale-105',
            secondary: 'bg-black transition-all duration-300 hover:bg-yellow-400'
        },
        textColor: {
            black: 'text-black',
            white: 'text-white'
        }
    }
})

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'primary' | 'secondary';
    textColor: 'black' | 'white';
}) {
    const {className,children,variant,textColor,...otherProps} = props

  return (
    <button className={buttonCVA({className,variant,textColor})}{...otherProps}>{children}</button>
  )
}
