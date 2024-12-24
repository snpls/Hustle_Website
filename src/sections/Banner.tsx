import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import bannerImage from '@/assets/3.png'

export default function Banner() {
  return (
    <section className='py-24'>
        <div className='container grid md:grid-cols-2 gap-16 items-center'>
            {/* desc */}
            <div className='text-center md:text-start space-y-12'>
                <h1 className='text-4xl lg:text-5xl font-extrabold max-md:px-10'>Design is not what it looks like and feels like. Design is how <span className='text-teal-600 underline block'>It Works</span></h1>
                <Button variant='primary' textColor='black'>More News</Button>
                <div className='flex gap-3'>
                    <div className='space-y-4'>
                        <h4 className='font-bold text-lg '>Design Tools</h4>
                        <p>lorem ipsum dolor sit,amet consctetur adipiscing elit</p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='font-bold text-lg'>Design Tools</h4>
                        <p>lorem ipsum dolor sit,amet consctetur adipiscing elit</p>
                    </div>
                </div>
            </div>

            {/* image */}
            <Image src={bannerImage} alt='image' className='md:scale-125' />
        </div>
    </section>
  )
}
