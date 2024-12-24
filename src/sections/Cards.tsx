import React from 'react'
import icon1 from '@/assets/icon/1.png'
import icon2 from '@/assets/icon/2.png'
import icon3 from '@/assets/icon/3.png'
import { title } from 'process'
import Image from 'next/image'


const CardsData = [
    {
        icon: icon1,
        title: 'About',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus',
    },
    {
        icon: icon2,
        title: 'Connection',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus',
    },
    {
        icon: icon3,
        title: 'Plugin',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus',
    },
]


export default function Cards() {
  return (
    <section className='py-20 bg-gray-200 '>
        <div className='container '>
            <div className='grid md:grid-cols-3 gap-8'>
            {CardsData.map(card => (
                <div key={title} className='bg-white rounded-lg px-5 py-10 text-center flex flex-col items-center gap-5 shadow-lg md:max-w-[300px]'>
                    <p className='bg-black size-16 rounded-full flex items-center justify-center'><Image src={card.icon} alt='image' className='p-3'/></p>
                    <h4 className='text-xl font-extrabold'>{card.title}</h4>
                    <p className='text-sm'>{card.desc}</p>
                    <a href="" className='underline text-lg'>Learn More</a>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}
