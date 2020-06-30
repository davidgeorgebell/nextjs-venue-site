export async function getAllEvents() {
  const res = await fetch(
    `https://api.airtable.com/v0/app9bv9UvKjThupFL/Events`,
    {
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
      },
    }
  );

  const events = await res.json();

  return events;
}
