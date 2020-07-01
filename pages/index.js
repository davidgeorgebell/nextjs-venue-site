import Head from 'next/head';
import Link from 'next/link';

import { Nav } from '../components/Nav';

import { CustomButton } from '../components/CustomButton';
import { getAllEvents, getGalleryImages } from '../lib/airtableData';
import Layout from '../components/Layout';
import { formatDate } from '../utils/formatDate';

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

export default function Home({ events, galleryImages }) {
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
                {events.map((event, index) => (
                  <Link key={index} href='event/[id]' as={`/event/${event.id}`}>
                    <a>
                      <img
                        src={event.fields.Image[0].url}
                        alt={event.fields.Name}
                      />
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
            <div className='gallery-wrapper content-wrapper'>
              <h2 className='title center'>Gallery</h2>
              <ul className='gallery-list'>
                {galleryImages.records.map((image, index) => (
                  <li key={index} className='gallery-item'>
                    <img
                      className='gallery-image'
                      src={image.fields.Image[0].url}
                      alt={image.fields.Title}
                    />
                  </li>
                ))}
              </ul>
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
  const galleryImages = await getGalleryImages();

  return {
    props: {
      events,
      galleryImages,
    },
  };
}
