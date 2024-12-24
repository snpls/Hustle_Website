import React from 'react'
import Button from '@/components/Button'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


export default function Email() {
  return (
    <section className='py-12'>
        <div className='container text-center flex flex-col items-center gap-5'>
            <h4 className='text-3xl font-extrabold'>Join our email</h4>
            <p className='mb-5 text-xl'>Get 20% off per order</p>
            <Button variant='primary' textColor='black'>Subsrcibe</Button>
            <div className='flex items-center gap-5 text-xl'>
                <a href=""><FaFacebook /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaXTwitter /></a>
                <a href=""><FaYoutube /></a>
            </div>
        </div>
    </section>
  )
}
