
import './App.css'
import { useRef, useEffect } from 'react'
import Landing from './components/landing/Index';
import Loader from './components/loader/Index';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Cursor from './components/Cursor/Index';
import Video from './components/Video/Index';
import About from './components/About/Index';
import Marqueue from './components/Marqueue/Index';
import Footer from './components/Footer/Index';
import Navbar from './components/Navbar/Index';
import Project from './components/Project/Index';
import CenterButton from './components/CenterButton';
// import 'locomotive-scroll/dist/locomotive-scroll.css'



function App() {
  const containerRef = useRef(null)
  // useEffect(() => {
  //   // Update the locomotive scroll whenever the location changes
  //   if (containerRef.current) {
  //     const event = new Event('resize');
  //     window.dispatchEvent(event);
  //   }
  // }, [location]);
  
  return (
    <LocomotiveScrollProvider
    options={
      {
        smooth: true,
        // ... all available Locomotive Scroll instance options 
      }
    }
    watch={
      [
        //...all the dependencies you want to watch to update the scroll
      ]
    }
    
    containerRef={containerRef}
    >
      <div ref={containerRef} className='main text-white overflow-hidden'>
        <Cursor/>
        <Loader />
        <div className=' bg-[#151515]'>
          <Navbar/>
          <Landing />
          <Project/>
          <CenterButton/>
          <About/>
          <Marqueue/>
          <Footer/>
        </div> 
      </div>
    </LocomotiveScrollProvider>
    
  )
}

export default App
