import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import PopularPrograms from '../components/PopularPrograms'
import WhyChooseUs from '../components/WhyChooseUs'
import Trainers from '../components/Trainers'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
       <About />
       <PopularPrograms />
       <WhyChooseUs />
       <Trainers />
       <Testimonials />
    </>
  )
}

export default Home