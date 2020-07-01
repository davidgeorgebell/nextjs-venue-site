import Link from 'next/link';

import { getAllEvents } from '../lib/eventsInfo';
import { CustomButton } from '../components/CustomButton';
import Layout from '../components/Layout';

export default function Events({ events }) {
  return (
    <Layout>
      <div className='content-wrapper'>
        <h1 className='title center'>Upcoming events</h1>

        <div className='events-page-grid'>
          {events.records.map((event, index) => (
            <div key={index}>
              <Link href='event/[id]' as={`/event/${event.id}`}>
                <a key={index}>
                  <h2 className='event-title'>{event.fields.Name}</h2>
                  <img src={event.fields.Image[0].url} />
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
