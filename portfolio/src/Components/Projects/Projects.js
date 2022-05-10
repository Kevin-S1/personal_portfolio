import './projects.css';

function Projects() {
  return (
    <>
        <div className='box'>
            <h2 className='header header__l'>Projects</h2>
          </div>

          <section className='project-container'>
            <article className='project'>
              <article className='project-image'>
              <img className='project-image__mobile' src={require('../../media/placeholder.png')}/>
              </article>
              <article className='project-description'>
                <h4 className='header header__s'>CryptoSimulator</h4>
                <h6 className='link-label'> <a href='https://github.com/Kevin-S1/cryptosimulator'>Github</a></h6>
                <p className='text text__project'>A platform which simulates buying and selling bitcoin. Built during a 24 hour hackathon at &lt;/salt&gt;.</p>
              </article>

            </article>
            <article className='project'>
              <article className='project-image'>
                <img className='project-image__mobile' src={require('../../media/byarnold.gif')}/>
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
                <img className='project-image__mobile' src={require('../../media/borrowmy.gif')}/>
              </article>
              <article className='project-description'>
                <h4 className='header header__s'>BorrowMy</h4>
                <h6 className='link-label'><a href='https://github.com/Kevin-S1/salt_final_project'>Github</a> </h6>
                <p className='text text__project'>A borrowing platform where parents can lend out their children's toys and borrow toys from other parents. Built with .NET WebAPI, React, Typescript and Azure DB.</p>
              </article>

            </article>

            <article className='project'>
              <article className='project-image'>
                <img className='project-image__mobile' src={require('../../media/placeholder.png')}/>
              </article>
              <article className='project-description'>
                <h4 className='header header__s'>kevinsips.dev</h4>
                <h6 className='link-label'><a href='https://github.com/Kevin-S1/personal_portfolio'>Github</a> </h6>
                <p className='text text__project'>The site that you're on now! Built with React.</p>
              </article>

            </article>
          </section>
    </>
  );
}

export default Projects;