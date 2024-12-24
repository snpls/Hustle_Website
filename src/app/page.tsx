import Banner from '@/sections/Banner'
import Cards from '@/sections/Cards'
import Email from '@/sections/Email'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import News from '@/sections/News'
import Services from '@/sections/Services'
import React from 'react'

export default function page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Cards />
      <News />
      <Email />
    </main>
  )
}
