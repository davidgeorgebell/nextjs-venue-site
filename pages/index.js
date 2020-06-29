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
            <div className='content-container'>
              <h1 className='hero-title'>Good Scran Cafe</h1>
            </div>
          </div>

          <div className='intro'>
            <div className='content-container'>
              <h3> An award winning coffee co working space</h3>
              <p className='intro-text'>
                A coffee shop that doesn't actually exist and is in fact a
                portfolio project.
              </p>
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
