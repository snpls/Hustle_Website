'use client'

import React, { useState } from 'react'
import logo from '@/assets/1.png'
import Image from 'next/image'
import { RiMenu2Fill } from "react-icons/ri";
import Link from 'next/link';
import Button from '@/components/Button';
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';


const Navlinks = [
    'home',
    'features',
    'shop',
    'about us',
    'contact',
]


export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false);

  return (
    <header className='py-10'>
        <motion.div 
            initial={{y:-100}}
            animate={{y:0,}}
            transition={{duration:0.5}}
            className='container'>
            <div className='flex items-center justify-between'>

                <div className='flex items-center gap-1'>
                    <Image src={logo} width={80} alt='logo image' />
                    <h4 className='text-2xl font-bold'>HUSTLE</h4>
                </div>

                <div className='flex items-center gap-10 max-lg:hidden'>
                    {Navlinks.map(navlink => (
                        <Link key={navlink} href={navlink} className='uppercase'>{navlink}</Link>
                    ))}
                </div>

                <Button variant='primary' textColor='white' className='max-lg:hidden'>Request For Qoutes</Button>
                <h4 onClick={() => setIsOpen(!isOpen)}  className='text-xl lg:hidden'>{isOpen ? <IoMdClose /> : <RiMenu2Fill/>}</h4> 
            </div>

            {/* open Navbar in mobile */}
            {isOpen && (
            <motion.div 
                initial={{y:-500}}
                animate={{y:0}}
                transition={{duration:0.5}}
                className='flex flex-col items-center gap-5 border border-gray-500 rounded-lg py-10 mt-5 bg-white'>
                {Navlinks.map(navlink => (
                        <Link key={navlink} href={navlink} className='uppercase'>{navlink}</Link>
                    ))}
                <Button variant='primary' textColor='white'>Request For Qoutes</Button>
            </motion.div>
            )}
        </motion.div>
    </header>
  )
}
