
import styles from './Style.module.css'
import AnimatedLink from '../AnimatedLink'
import MagneticGSAP from '../GsapMagnetic'
import { motion, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

function Navbar() {
  const data = [
    {title: 'Works'},
    {title: 'About'},
    {title: 'Contact'},
  ]

    const mapRange = (
      inputLower,
      inputUpper,
      outputLower,
      outputUpper,
    ) => {
      const INPUT_RANGE = inputUpper - inputLower;
      const OUTPUT_RANGE = outputUpper - outputLower;
  
      return (value) => 
        outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
    }
  
    const setTransform = (item, event, x, y) => {
      const bounds = item.getBoundingClientRect();
      const relativeX = event.clientX - bounds.left;
      const relativeY = event.clientY - bounds.top;
      const xRange = mapRange(1, bounds.width, -2, 2)(relativeX)
      const yRange = mapRange(1, bounds.height, -2, 2)(relativeY)
      x.set(xRange * 10)
      y.set(yRange * 10)
      console.log(xRange)
    }


  return (
    <div className="w-full ">
      <div className="header 
        flex sm:items-start justify-between 
        px-[4vw] py-[6vw]
        sm:px-[3vw] sm:py-[2vw]"
      >
        <div className="first w-[26vw] flex items-start justify-between ">

          <div className="first2 hidden sm:inline-block text-[.9vw] leading-none">
            <h5>Polina-</h5>
            <h5>Petkevich</h5>
            <h5>Designer,</h5>
            <h5>Developer.</h5>
          </div>
        </div>

        
        {/* <div className="last hidden sm:flex w-[14vw] justify-around relative
          text-[.9vw]  "
        >
          <h6 className={`text ${styles.text}`}>Works</h6>
          <h6 className={`text ${styles.text}`}>About</h6>
          <h6 className={`text ${styles.text}`}>Contact</h6>
           
        </div> */}
        <div className='last hidden sm:flex items-start w-[14vw] justify-around relative 
          text-[.9vw]'
        >
          {/* {data.map((item, index) => {
            return (
              <div key={index} className='relative flex flex-col text-[.9vw] 
                leading-[1.2vw]'
              >
                  <AnimatedLink title={item.title} />
              </div>
            )
          })} */}
          {data.map((item, index) => {
              const x = useMotionValue(0);
              const y = useMotionValue(0);
              return (
                <motion.div 
                  onPointerMove={(event) => {
                    const item = event.currentTarget;
                    setTransform(item, event, x, y)
                  }}
                  onPointerLeave={() => {
                    x.set(0)
                    y.set(0)
                  }}
                  style={{ x, y }}
                  key={index} 
                  className={`navText ${styles.navText} px-[1.3vw] py-[1.1vw]  `}
                >
                  <span className={`text ${styles.text}`}>{item.title}</span>
                </motion.div>
              )
          })}
        </div>
      </div> 
    </div>
  )
}

export default Navbar
