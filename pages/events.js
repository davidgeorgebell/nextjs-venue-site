import Link from 'next/link';

import { getAllEvents } from '../lib/airtableData';
import Layout from '../components/Layout';
import { AnimationX } from '../components/AnimationX';

export default function Events({ events }) {
  return (
    <Layout>
      <div className='content-wrapper'>
        <AnimationX>
          <h1 className='title center'>Upcoming events</h1>
        </AnimationX>

        <div className='events-page-grid'>
          {events.map((event, index) => (
            <div key={index}>
              <Link href='event/[id]' as={`/event/${event.id}`}>
                <a key={index}>
                  <div className='grid-image-wrapper'>
                    <img
                      className='grid-image'
                      src={event.fields.Image[0].url}
                    />
                  </div>
                  <h2 className='title'>{event.fields.Name}</h2>
                </a>
              </Link>
            </div>
          ))}
        </div>
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
