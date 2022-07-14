import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Home.scss'
import CustomSwiper from './CustomSwiper';


/* ---- */
const Welcome = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: ['^1200Welcome to ' ],
      typeSpeed: 60,
      loop: false,
      cursorChar: '',
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])
  
  return (
    <div className="wrap">
    <div className="type-wrap">
    <span style={{ whiteSpace: 'pre' }} ref={el} />
    </div>
    </div>
    );
  }
  
  const Home = () => {
    return (
      <>
      <div className="welcome-wrapper">
        <span className='typed'>
          <Welcome />
          <div className='space'>|</div>
          <span className='brand'>arc.dev</span>
        </span>
        <span className="motto">If you can imagine it, we can build it.</span>
      </div>


      <div className="main-wrapper">
        <div className="about">
          <div className="title">About us.</div>
          <div className='gif'>
            <img src={require("../assets/images/arc-anim_2.gif")} alt="gif" />
          </div>
          <div className='text'>
            We are a team of designers, developers, and product managers that are passionate about building beautiful, responsive, and accessible user interfaces.
          </div>
        </div>
        
        <div className="border"></div>
        
        <div className="swiper-wrapper">
          <CustomSwiper />
        </div>
      </div>
      </>
      )
    }
    
    export default Home;