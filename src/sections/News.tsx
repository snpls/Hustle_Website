import React from 'react'
import newsImage from '@/assets/4.png'
import Image from 'next/image'
import Button from '@/components/Button'

export default function News() {
  return (
    <section className='py-32'>
        <div className='container grid md:grid-cols-2 gap-20'>

            <Image src={newsImage} alt="image" className='md:scale-125 lg:scale-150' />

            <div className='text-center md:text-start grid gap-10 md:max-w-[400px]'>
                <h4 className='lg:text-lg'>TECH ADDICTS</h4>
                <h2 className='text-4xl lg:text-5xl font-extrabold'>They really understood our <span className='text-teal-600 underline'>Needs</span></h2>
                <div><Button variant='primary' textColor='black'>More News</Button></div>
            </div>
        </div>
    </section>
  )
}
