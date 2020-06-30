import React from 'react';

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

export const Events = ({ events }) => {
  console.log(events);
  return (
    <div className='events'>
      <h3>Upcoming Events</h3>
      {events.records.map((event, index) => (
        <p key={index}>{event.fields.Name}</p>
      ))}
      <p>We host exciting events for the community to come together.</p>

      <span>IMAGE</span>
      <span>IMAGE</span>
      <span>IMAGE</span>
      <button className='animated-link'>See more events</button>
    </div>
  );
};
