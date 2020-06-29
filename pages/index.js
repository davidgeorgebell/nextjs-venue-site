import Head from 'next/head';
import { Nav } from '../components/Nav';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Good Scran Cafe</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='content-container'>
        <main>
          <div className='home-grid-wrapper'>
            <div className='home-grid-1'>
              <span>LOGO</span>
              <h1 className='title'>Good Scran Cafe & CO</h1>
            </div>
            <div className='home-grid-2'>
              <Nav />
              <div className='intro'>
                <span className='decoration'></span>
                <p className='intro-text'>
                  Good Scran Cafe is an award winning co working cafe in the
                  heart of Taipei, Taiwan.
                </p>
              </div>
            </div>
            <div className='home-grid-3'>
              <img className='home-image' src='/cafe.jpg' alt='Cafe' />
            </div>
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
