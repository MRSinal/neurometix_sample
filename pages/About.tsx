import React from 'react'
import Footer from './components/Footer'
import Link from 'next/link'
import styled from 'styled-components'
import Navbar from './components/Navbar'



const About = () => {
  return (
    <div className='bg-black '>
      <div className='about'>
        <Navbar></Navbar>
        <div className=' text-white flex-col mx-56 mt-24' id='about'>
          <div className=' text-5xl my-12 font-futura '>We are here to help at each stage of the drug discovery process</div>
          <span className=' font-futura_light text-3xl '>Developing new drugs or repurposing existing molecules that can efficiently treat CNS disorders or can modify the disease process pose unique challenges as reflected in the lack of efficient pharmacotherapies for most CNS disorders and the huge failure rate of clinical trials. We have incomplete understanding of many / most CNS disease processes but substantial numbers of candidate drugs fail due to misconceptions, bias, lack of animal models, poor use of existing clinical data and overinterpretation of animal studies, to name a few. Importantly, small innovative biopharmaceuticals with truly promising drugs often lack the critical regulatory knowledge necessary to move their drugs in the pipeline. We are here to help at each stage of the drug discovery process, providing clear unbiased evaluation, viability of the drug development and/or repurposing process, we help to identify the critical next steps, experimental or regulatory.</span>
        </div>
        <Footer></Footer>

      </div>
    </div>
  )
}

export default About