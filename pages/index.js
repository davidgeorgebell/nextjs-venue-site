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
    <>
      <header>
        <div className='header-wrapper'>
          <h1 className='site-title'>Music Club | Grimsby, England </h1>
        </div>
      </header>

      <Layout>
        <Head>
          <title>Music Club</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <div>
          <main>
            <div className='events content-wrapper'>
              <h2 className='title center'>Upcoming Events</h2>
              <div className='events-grid'>
                {events.records.map((event, index) => (
                  <Link key={index} href='event/[id]' as={`/event/${event.id}`}>
                    <a>
                      <img src={event.fields.Image[0].url} />
                      <h3>
                        {event.fields.Name}{' '}
                        <time>{formatDate(event.fields.Date)}</time>
                      </h3>
                    </a>
                  </Link>
                ))}
              </div>
              <div className='center'>
                <Link href='/events'>
                  <a>
                    <CustomButton>See More</CustomButton>
                  </a>
                </Link>
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
      </Layout>
    </>
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
