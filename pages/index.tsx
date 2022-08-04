import type { NextPage } from 'next'
import { lazy } from 'react'
import Navbar from './components/Navbar'
import Brain from './components/Brain'
import Vision from './components/Vision'
import Service from './components/Service'
import Footer from './components/Footer'
const Home: NextPage = () => {
  return (
    <div id='brain'>
      <Navbar ></Navbar>
      <Brain />
      <Vision />
      <Service />
      <Footer />

    </div>
  )
}

export default Home