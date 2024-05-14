import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnderLine from '../Underline/Index'


gsap.registerPlugin(ScrollTrigger);

function About() {


    useGSAP(() => {
    gsap.from('.aboutHeading h1', {
        y: 120,
    })
    gsap.to('.underline', {
        width: '100%',
        duration: 1.2,
    })
    gsap.from('.aboutText h2', {
        y: 50,
        stagger: 0.1,

    })
    gsap.from('.rightText h5', {
        opacity: 0,
        stagger: 0.1
    })
    gsap.to('.underline2', {
        width: '100%',
        duration: 1.2,
    })

    })

  return (
    <div className="page4 relative sm:flex gap-[5vw]  w-full  px-[4vw] py-[6vw]
        sm:px-[4vw]
    ">
        <div className="left">
            <div className=" sm:pl-[14vw] ">
                <div className="font-[silkSerif] text-[4.6vw] 
                    sm:text-[2.6vw] sm:leading-[4vw]"
                >
                    <h2>03</h2>
                </div>             
            </div>
        </div>
        <div className="right">
            <div className="">
                <div className="aboutHeading overflow-hidden pb-[3vw] sm:pb-0">
                    <h1 className="text-[8vw] leading-[10vw] tracking-tighter
                        sm:text-[6vw] font-[PlinaReg] sm:leading-[6vw] sm:tracking-normal
                        uppercase"
                    >
                        About Me
                    </h1>
                </div>
                {/* <div 
                    className="underline mt-[6vw] mb-[11vw] w-0 h-[.25vw] 
                    sm:h-[.01vw] sm:mt-[3.8vw] sm:mb-[5vw] bg-white"
                ></div> */}

                {/*Line animation */}
                {/* <div 
                className={`line ${styles.line} relative mt-[6vw] mb-[11vw] w-full h-[.25vw] 
                sm:h-[.01vw] sm:mt-[4vw] sm:mb-[5vw] `}
                >
                    <div 
                        className={`box ${styles.box}`} 
                        onMouseMove={manageMouseMove}
                        onMouseLeave={manageMouseLeave}
                    >
                    </div>
                    <svg className='w-full h-[100px] absolute -top-[50px]'>
                        <path ref={path} className={`path1 ${styles.path1}`} ></path>
                    </svg>
                </div> */}
                <UnderLine marginBottom='4vw' marginTop='4vw' />
                <div 
                    className="sm:w-2/4 text-[5.5vw] tracking-normal leading-[6vw] font-[PlinaReg] pt-[8vw] sm:pt-0
                    sm:text-[1.8vw] sm:leading-[2.2vw]"
                >
                    <div className="aboutText overflow-hidden"><h2>I am Polina - MIREA student,</h2></div>
                    <div className="aboutText overflow-hidden"><h2>who love creating, designing and</h2></div>
                    <div className="aboutText overflow-hidden"><h2>developing cool projects. In the</h2></div>
                    <div className="aboutText overflow-hidden"><h2>same time I also really love</h2></div>
                    <div className="aboutText overflow-hidden"><h2>low-level development and</h2></div>
                    <div className="aboutText overflow-hidden"><h2>other PC stuff. I made a lot of</h2></div>
                    <div className="aboutText overflow-hidden"><h2>projects for people and companies.</h2></div>
                    
                </div>
                <div className="relative flex flex-col mt-8 sm:flex-row sm:mt-16 gap-8 ">
                    <div className=" order-2 sm:order-1  sm:w-1/2">
                        <img className="" src="https://obys.agency/wp-content/uploads/2020/07/content-image01.jpg" alt="image"/>
                    </div>
                    <div 
                        className="rightText order-1 sm:order-2 w-2/3  text-[3.2vw] font-[PlinaReg] leading-[5vw] 
                        text-[#cbcaca]
                        sm:w-1/5  sm:text-[.9vw] sm:leading-[1.4vw]   "
                    >
                        <h5 className="mb-8">I am happy to present my new website. It really helps me feel better in development society.</h5>
                        <h5>
                            If you wanna same cool site, which will win a lot of awards, DM me in Telegram or by mail polina@petkevich.su.
                            And I we will help you with the pleasure.
                        </h5>
                    </div>       
                </div>
                {/* Line animation */}
                <UnderLine  marginBottom='1vw' marginTop='18vw'  />
                {/* <div 
                    className="underline mt-[16vw] mb-[5vw] w-full h-[.25vw] 
                    sm:h-[.01vw] sm:mt-[18vw] sm:mb-[1vw] bg-white"
                ></div> */}
                <p className="font-[PlinaReg] text-[3.5vw] pt-[3vw] sm:pt-0 sm:text-[.8vw]">We work with</p>
            </div>    
        </div>
    </div>
  )
}

export default About
