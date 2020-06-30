import Head from 'next/head';
import Link from 'next/link';

import { Nav } from '../components/Nav';

import { CustomButton } from '../components/CustomButton';
import { getAllEvents } from '../lib/eventsInfo';
import Layout from '../components/Layout';

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

export default function Home({ events }) {
  return (
    <Layout>
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
              <Link href='event/[id]' as={`/event/${event.id}`}>
                <a key={index}>
                  <img src={event.fields.Image[0].url} />
                </a>
              </Link>
            ))}
            <Link href='/events'>
              <a>
                <CustomButton>See All Upcoming Events</CustomButton>
              </a>
            </Link>
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
    </Layout>
  );
}
export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
  };
}
