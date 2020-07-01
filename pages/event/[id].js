import React from 'react';

import { formatDate } from '../../utils/formatDate';
import Layout from '../../components/Layout';

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

export default function Event({ event }) {
  return (
    <Layout>
      <div className='content-wrapper'>
        <div className='event-wrapper'>
          <img
            className='event-image'
            src={event.fields.Image[0].url}
            alt={event.fields.Name}
          />
          <div className='event-text'>
            <h1 className='event-title'>{event.fields.Name}</h1>
            <time>{formatDate(event.fields.Date)}</time>
            <p>{event.fields.Notes}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await fetch(
    `https://api.airtable.com/v0/app9bv9UvKjThupFL/Events`,
    {
      method: 'get',
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    }
  );
  const projects = await res.json();

  const paths = projects.records.map(project => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.airtable.com/v0/app9bv9UvKjThupFL/Events/${params.id}`,
    {
      method: 'get',
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    }
  );
  const event = await res.json();

  return {
    props: {
      event,
    },
  };
}
