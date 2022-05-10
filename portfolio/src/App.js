import './App.css';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from './Components/NavBar/NavBar';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      
      <Parallax pages={3}>
        <ParallaxLayer className='parallax-sticky' sticky={{start: 0, end: 3}}>
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
            <h2 className='header header__l'>Skills</h2>
          </div>

          <section className='column-container'>
            <div className='column'>
              <h3 className='header header__m'>Languages</h3>
              <div className='column column__sub'>
                <h4 className='header'>Programming languages</h4>
                <article className='column-item'>
                  <h5 className='subheader'>C#</h5>
                </article>
                <article className='column-item'>
                  <h5 className='subheader'>Typescript/Javascript</h5>
                </article>
                <article className='column-item'>
                  <h5 className='subheader'>Python</h5>
                </article>
              </div>
              <div className='column column__sub'>
                <h4 className='header'>Human languages</h4>
                <article className='column-item'>
                  <h5 className='subheader'>Dutch - Native</h5>
                </article>
                <article className='column-item'>
                  <h5 className='subheader'>English - Fluent</h5>
                </article>
                <article className='column-item'>
                  <h5 className='subheader'>Swedish - Intermediate</h5>
                </article>
              </div>
            </div>
            <div className='column'>
              <h3 className='header header__m'>Backend</h3>
              <article className='column-item'>
                <h5 className='subheader'>.NET</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Entity Framework</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>REST API's</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>MongoDB</h5>
              </article>
            </div>
            <div className='column'>
              <h3 className='header header__m'>Frontend</h3>
              <article className='column-item'>
                <h5 className='subheader'>HTML</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>CSS/SASS</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Razor pages</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>REACT</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Bootstrap</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Tailwind CSS</h5>
              </article>
            </div>
            <div className='column'>
              <h3 className='header header__m'>Tools & Technologies</h3>
              <article className='column-item'>
                <h5 className='subheader'>VS Code</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Visual Studio/Rider</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Git</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Docker</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>XUnit/FluentAssertions</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Mocha/Jest</h5>
              </article>
              <article className='column-item'>
                <h5 className='subheader'>Azure & Firebase</h5>
              </article>
            </div>
            
          </section>
          
          
        </ParallaxLayer>

        <ParallaxLayer offset={2} className='parallax-page page-3'>
          <div className='box'>
            <h2 className='header header__l'>Projects</h2>
          </div>

          <section className='project-container'>
            <article className='project'>
              <article className='project-image'>
                <img className='project-image__mobile' src={require('./placeholder.png')}/>
              </article>
              <article className='project-description'>
                <h4 className='header header__s'>CryptoSimulator</h4>
                <h6 className='link-label'> <a href='https://github.com/Kevin-S1/cryptosimulator'>Github</a></h6>
                <p className='text text__project'>A platform which simulates buying and selling bitcoin. Built during a 24 hour hackathon at &lt;/salt&gt;.</p>
              </article>

            </article>
            <article className='project'>
              <article className='project-image'>
                <img className='project-image__mobile' src={require('./byarnold.gif')}/>
              </article>
              <article className='project-description'>
                <h4 className='header header__s'>byarnold.com</h4>
                <h6 className='link-label'> <a href='https://github.com/Kevin-S1/byarnold_react'>Github</a> </h6>
                <h6 className='link-label'> <a href='https://www.byarnold.com'>Live version</a> </h6>
                <p className='text text__project'>A website built for a small business owner. Includes an admin page. Built with React, Javascript & Firebase.</p>
              </article>

            </article>

            <article className='project'>
              <article className='project-image'>
                <img className='project-image__mobile' src={require('./borrowmy.gif')}/>
              </article>
              <article className='project-description'>
                <h4 className='header header__s'>BorrowMy</h4>
                <h6 className='link-label'><a href='https://github.com/Kevin-S1/salt_final_project'>Github</a> </h6>
                <p className='text text__project'>A borrowing platform where parents can lend out their children's toys and borrow toys from other parents. Built with .NET WebAPI, React, Typescript and Azure DB.</p>
              </article>

            </article>

            <article className='project'>
              <article className='project-image'>
                <img className='project-image__mobile' src={require('./placeholder.png')}/>
              </article>
              <article className='project-description'>
                <h4 className='header header__s'>kevinsips.dev</h4>
                <h6 className='link-label'><a href='https://github.com/Kevin-S1/personal_portfolio'>Github</a> </h6>
                <p className='text text__project'>The site that you're on now! Built with React.</p>
              </article>

            </article>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
