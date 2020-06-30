import Head from 'next/head';
import { Nav } from '../components/Nav';
import { Events } from '../components/Events';

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

export default function Home({ events }) {
  return (
    <div className='container'>
      <Head>
        <title>The Yardies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Nav />
      </header>
      <div>
        <main>
          <Events events={events} />
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
export async function getStaticProps() {
  const res = await fetch(
    `https://api.airtable.com/v0/app9bv9UvKjThupFL/Events`,
    {
      method: 'get',
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    }
  );

  const events = await res.json();

  console.log(events);

  return {
    props: {
      events,
    },
  };
}
