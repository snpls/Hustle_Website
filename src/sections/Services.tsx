import Image from 'next/image'
import React from 'react'
import plantImage from '@/assets/2.png'

const cardService = [
    {
        plantImage: plantImage,
        title: 'Learn by doing',
        descp: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia asperiores magnam? Assumenda perferendis optio dicta natus nobis, cupiditate eveniet libero ratione quam iusto!',
    },
    {
        plantImage: plantImage,
        title: 'Learn by doing',
        descp: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia asperiores magnam? Assumenda perferendis optio dicta natus nobis, cupiditate eveniet libero ratione quam iusto!',
    },
    {
        plantImage: plantImage,
        title: 'Learn by doing',
        descp: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia asperiores magnam? Assumenda perferendis optio dicta natus nobis, cupiditate eveniet libero ratione quam iusto!',
    }
]


export default function Services() {
  return (
    <section className='py-28'>
        <div className='container'>
            <h4 className='text-4xl lg:text-5xl font-extrabold mb-10'>Classes to Spark Your <span className='text-teal-600 underline'>Creativity</span></h4>
            
            <div className='grid md:grid-cols-2 gap-10'>
                <Image src={plantImage} alt='image' className='max-w-[350px]'/>
                {cardService.map((card,index) => (
                    <div key={index} className='space-y-4 max-w-[400px]'>
                        <Image src={card.plantImage} className='size-14' alt='image' />
                        <h4 className='text-2xl lg:text-3xl font-bold'>{card.title}</h4>
                        <p className='border-l lg:-text-xl border-gray-500/25 pl-5 text-gray-600'>{card.descp}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
