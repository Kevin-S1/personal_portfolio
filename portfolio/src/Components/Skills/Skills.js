import './skills.css';

function Skills() {
  return (
        <>
          <div className='box'>
            <h2 className='header header__l'>Skills</h2>
          </div>

          <section className='column-container'>
            <div className='column'>
              <section className='column-title'>
                <h3 className='header header__m'>Languages</h3>
              </section>
              <div className='column column__sub'>
                <h4 className='header header__s'>Programming</h4>
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
                <h4 className='header header__s'>Natural</h4>
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
              <section className='column-title'>
                <h3 className='header header__m'>Backend</h3>
              </section>
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
              <section className='column-title'>
                <h3 className='header header__m'>Frontend</h3>
              </section>
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
              <section className='column-title'>
                <h3 className='header header__m'>Tools & Technologies</h3>
              </section>
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
        </>
  );
}

export default Skills;