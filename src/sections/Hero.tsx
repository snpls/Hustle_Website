"use client"

import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import logo from '@/assets/1.png'
import { motion } from 'framer-motion'
import { Slideleft, SlideUp } from '@/animation/anime'

export default function Hero() {
  return (
    <section className='md:py-28 py-12'>
        <div className='container md:grid md:grid-cols-2 max-md:space-y-20 max-md:px-12'>
            <div className='flex items-center max-lg:max-w-[300px] lg:max-w-[450px]'>
                <div className='text-center md:text-start space-y-5 '>
                    <motion.h4 variants={SlideUp(0.2)} initial="initial" animate="animate" className='text-4xl lg:text-5xl font-extrabold'>Unlock a Passion, Side Hustle, or New <span className='text-teal-600 underline block'>Profession</span></motion.h4>
                    <motion.p variants={SlideUp(0.4)} initial="initial" animate="animate">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, mollitia.</motion.p>
                    <motion.div variants={SlideUp(0.6)} initial="initial" animate="animate"><Button variant='secondary' textColor='white'>More News</Button></motion.div>
                </div>
            </div>

            <motion.div variants={Slideleft(0.2)} initial="initial" animate="animate"><Image src={logo} alt='logo image' /></motion.div>
            
        </div>
    </section>
  )
}
