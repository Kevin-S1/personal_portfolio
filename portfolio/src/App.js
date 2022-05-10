import './App.css';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from './Components/NavBar/NavBar';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      
      <Parallax pages={4}>
        <ParallaxLayer className='parallax-sticky' sticky={{start: 0, end: 4}}>
          <h4 className='header header__name'>Kevin Sips</h4>
          <div className='parallax-sticky-icons'>
            <AiFillGithub className='parallax-sticky-icon' />
            <AiFillLinkedin className='parallax-sticky-icon' />

          </div>
          
        </ParallaxLayer>

        <ParallaxLayer 
          className='parallax-page__centered'>
          <div className='box box__name'>
            <h1 className='header header__xl'>Hi, I'm Kevin.</h1>
            <h3 className='header header__m'>A full-stack developer based in Stockholm.</h3>
            <h4 className='header header__s'>About me:</h4>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <img className='image__kevin' src={require('./IMG-0127.JPG')} />
          
        </ParallaxLayer>

        <ParallaxLayer className='parallax-page' offset={1}>
          <div className='box'>
            <h2 className='header header__l'>Tech stack</h2>
          </div>

          <section className='column-container'>
            <div className='column'>
              <h4 className='header header__m'>Backend</h4>
              <article className='column-item'>
                <h5>.NET</h5>
              </article>
            </div>
            <div className='column'>
              <h4 className='header header__m'>Frontend</h4>
            </div>
            <div className='column'>
              <h4 className='header header__m'>Tools</h4>
            </div>
            <div className='column'>

            </div>
          </section>
          
          
        </ParallaxLayer>

        <ParallaxLayer>
          
        </ParallaxLayer>

        <ParallaxLayer>
          
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
