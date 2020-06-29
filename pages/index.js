import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Good Scran Cafe</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='content-container'>
        <main>
          <h1 className='title'>Good Scran Cafe</h1>
        </main>

        <footer>
          <a
            href='https://twitter.com/DavidGeorgeBell'
            target='_blank'
            rel='noopener noreferrer'>
            Made by David Bell
          </a>
        </footer>
      </div>
    </div>
  );
}
