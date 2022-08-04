import { useRef, useEffect, useContext } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import s from '/styles/vision.module.css'
import { ScrollContext } from '../../utils/scroll-observer'


const opacityForBlock = (sectionProgress: number, blockNo:number) =>{
  const progress = sectionProgress - blockNo
  if(progress >= 0 && progress < 1) return 1 
  return 0.2
}

const Vision: React.FC = () => {
  const {scrollY} = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)


  const numOfPage = 3
  let progress = 0
   
  const {current: elContainer} = refContainer
  if(elContainer){
    const {clientHeight, offsetTop} = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY = Math.min(clientHeight + halfH,  Math.max(-screenH, scrollY - offsetTop) + halfH ) / clientHeight
    progress = Math.min(numOfPage - 0.5, Math.max(0.5, percentY * numOfPage))

  }
  return (
    
    <div ref= {refContainer} className='bg-white text-black' id='vision' >
      <div className='min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-20 md:py-28 lg:py-36 flex justify-center text-center text-4xl md:text-6xl lg:text-5_8 tracking-tight  font-futura font-normal'>
        <div className='leading-[1.15]'>
          <div className={s.visionText} style = {{opacity : opacityForBlock(progress, 0)}}>The outside is better.</div>
          <span className={`${s.visionText} inline-block after:content-['_']`} style = {{opacity : opacityForBlock(progress, 1)}}>The inside is full of the same people, thinking the same way and chasing the same thing with the same approach over and over and over again… with the same predicable outcome.....</span>
          <span className={`${s.visionText} inline-block`} style = {{opacity : opacityForBlock(progress, 2)}}>The outside are people who: think free,< strong>“Think different”,</strong> willing and able to connect existing dots and find working solutions.  </span>
        </div>

      </div>


    </div>
  )
}

export default Vision