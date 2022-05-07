import './App.css';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Parallax pages={4}>
        <ParallaxLayer>
          <h1 className='header header__xl'>Hi, I'm Kevin.</h1>
          <h3 className='header header__m'>A full-stack developer based in Stockholm.</h3>
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <h2 className='header header__l'>Tech stack</h2>
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
