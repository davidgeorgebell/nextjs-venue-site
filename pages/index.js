import Head from 'next/head';
import { Nav } from '../components/Nav';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Good Scran Cafe</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Nav />
      </header>
      <div>
        <main>
          <div className='hero'>
            <div className='hero-text'>
              <h1 className=' hero-title headline'>Good Scran Cafe</h1>
              <p className='hero-blurb'>
                An award winning coffee co working space that doesn't actually
                exist and is in fact a portfolio project.
              </p>
            </div>
            <div>
              <img className='hero-image' src='/cafe.jpg' alt='cafe' />
            </div>
          </div>
          <div className='intro'>
            <h3 className='headline intro-title'>Workspace Revolution</h3>
            <p>
              Good Scran Cafe is an award winning coffee and Co working space.
            </p>
            <button className='animated-link'>Find out more</button>
          </div>

          <div className='events'>
            <h3>Upcoming Events</h3>
            <p>We host exciting events for the community to come together.</p>
            <span>IMAGE</span>
            <span>IMAGE</span>
            <span>IMAGE</span>
            <button className='animated-link'>See more events</button>
          </div>

          <div className='images'>
            <h3 className='header'>Social</h3>
            <span>IMAGE</span>
            <span>IMAGE</span>
            <span>IMAGE</span>
            <span>IMAGE</span>
            <span>IMAGE</span>
            <span>IMAGE</span>
          </div>

          <div className='contact'>
            <h3 className='header'>Contact us</h3>
            <p>
              You can call us if you would like some information or to hire out
              Good Scran Cofee for an event.
            </p>
            <button className='animated-link'>Contact us</button>
          </div>
        </main>

        {/* 
        <footer>
          <a
            href='https://twitter.com/DavidGeorgeBell'
            target='_blank'
            rel='noopener noreferrer'>
            Made by David Bell
          </a>
        </footer> */}
      </div>
    </div>
  );
}
