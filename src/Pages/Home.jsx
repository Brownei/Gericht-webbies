import React from 'react'
import About from '../Components/About'
import Belief from '../Components/Belief'
import FindUs from '../Components/FindUs'
import Hero from '../Components/Hero'
import Laurels from '../Components/Laurels'
import NewsLetter from '../Components/NewsLetter'
import PhotoGallery from '../Components/PhotoGallery'
import Specials from '../Components/Specials'

const Home = () => {
  return (
   <>
     < Hero />
      < About />
      < Specials />
      < Belief />
      < Laurels />
      < PhotoGallery />
      < FindUs />
      < NewsLetter />
   </>
  )
}

export default Home