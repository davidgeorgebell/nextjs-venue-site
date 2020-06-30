import Head from 'next/head';
import Link from 'next/link';

import { Nav } from '../components/Nav';

import { CustomButton } from '../components/CustomButton';
import { getAllEvents } from '../lib/eventsInfo';
import Layout from '../components/Layout';
import { formatDate } from '../utils/formatDate';

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

export default function Home({ events }) {
  return (
    <Layout>
      <Head>
        <title>Music Club</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div className='header-wrapper'></div>
      </header>
      <Nav />
      <div>
        <main>
          <div className='events content-wrapper'>
            <h3>Upcoming Events</h3>
            <div className='events-grid'>
              {events.records.map((event, index) => (
                <Link href='event/[id]' as={`/event/${event.id}`}>
                  <a key={index}>
                    <img src={event.fields.Image[0].url} />
                    <time>{formatDate(event.fields.Date)}</time>
                    <h3>{event.fields.Name}</h3>
                  </a>
                </Link>
              ))}
            </div>
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
