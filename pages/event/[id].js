import React from 'react';

import { formatDate } from '../../utils/formatDate';

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

export default function Event({ event }) {
  return (
    <div>
      <h1>{event.fields.Name}</h1>
      <time>{formatDate(event.fields.Date)}</time>
      <p>{event.fields.Notes}</p>
      <img src={event.fields.Image[0].url} alt={event.fields.Name} />
    </div>
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
