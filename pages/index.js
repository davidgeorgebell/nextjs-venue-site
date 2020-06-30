import Head from 'next/head';
import Link from 'next/link';

import { Nav } from '../components/Nav';

import { CustomButton } from '../components/CustomButton';

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
          <div className='events'>
            <h3>Upcoming Events</h3>
            {events.records.map((event, index) => (
              <Link href='events/[id]' as={`/events/${event.id}`}>
                <a>
                  <img key={index} src={event.fields.Image[0].url} />
                </a>
              </Link>
            ))}

            <CustomButton>See All Upcoming Events</CustomButton>
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

  return {
    props: {
      events,
    },
  };
}
