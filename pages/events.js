import Link from 'next/link';

import { getAllEvents } from '../lib/eventsInfo';
import { CustomButton } from '../components/CustomButton';
import Layout from '../components/Layout';

export default function Events({ events }) {
  return (
    <Layout>
      <div>
        <h1>Upcoming events</h1>
        {events.records.map((event, index) => (
          <div key={index}>
            <h2>{event.fields.Name}</h2>
            <img src={event.fields.Image[0].url} />
            <Link href='event/[id]' as={`/event/${event.id}`}>
              <a key={index}>
                <CustomButton>See event details</CustomButton>
              </a>
            </Link>
          </div>
        ))}
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
