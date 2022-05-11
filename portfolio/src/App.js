import './App.css';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useRef } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillCheckCircle } from 'react-icons/ai'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {

  const parallaxRef = useRef()

  const onScroll = () =>
    console.log(parallaxRef.current.current / parallaxRef.current.space)

  useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return
    parallaxRef.current.container.onscroll = onScroll
  })

  return (
      <Parallax pages={3} ref={parallaxRef} className="parallax">

        <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#364078' }} />
        <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#367678' }} />
        <ParallaxLayer offset={2} speed={0} style={{ backgroundColor: '#783636' }} />
        
        <ParallaxLayer
          offset={0}
          speed={1}
          className='parallax-page parallax-page__landing'>
          <div className='box box__name'>
            <section className='box box__left'>
              <h1 className='header header__xl'>Hi, I'm Kevin.</h1>
              <h3 className='header header__m'>A full-stack developer based in Stockholm.</h3>
              <h3 className='header header__s header__light'><AiFillCheckCircle style={{color:"lightgreen"}}/> Working for &lt;/salt&gt; and available for hire!</h3>
              <h4 className='header header__s header__light header__left'>About me:</h4>
              <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section className='box box__right'>
              <img className='image__kevin' src={require('./media/IMG-0127.JPG')} />
            </section>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={5} className="landing-page--overlay">
          <h4 className='header header__light header__landing-page'>Take a look at my profiles or get in touch!</h4>
          <img className='arrow' src={require('./media/arrow1.png')}/>
        </ParallaxLayer>
      
        <ParallaxLayer 
          offset={1}
          speed={1}
          className='parallax-page parallax-page__skills'>
          <Skills/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2} 
          speed={1}
          className='parallax-page parallax-page__projects'>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer className='parallax-sticky' sticky={{start: 0, end: 3}} >
          <h4 className='header header__name'>Kevin Sips</h4>
          <section className='icons'>
            <a href='https://github.com/Kevin-S1'><AiFillGithub className='icon' /></a>
            <a href='https://www.linkedin.com/in/kevinsips/'><AiFillLinkedin className='icon' /></a>
            <a href='mailto:kevin.sips@appliedtechnology.se'><AiFillMail className='icon' /></a>
          </section>
          <section className='parallax-sticky-nav'>
            <button className='nav-item' onClick={() => parallaxRef.current.scrollTo(0)}><MdNavigateNext className='nav-icon'/>Home</button>
            <button className='nav-item' onClick={() => parallaxRef.current.scrollTo(1)}><MdNavigateNext className='nav-icon'/>Skills</button>
            <button className='nav-item' onClick={() => parallaxRef.current.scrollTo(2)}><MdNavigateNext className='nav-icon'/>Projects</button>
          </section>
        </ParallaxLayer>
      </Parallax>
  );
}

export default App;
