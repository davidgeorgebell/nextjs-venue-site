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

  const orderedByDate = events.records.sort((a, b) =>
    a.fields.Date < b.fields.Date ? -1 : +1
  );

  console.log(orderedByDate);
  return orderedByDate;
}

export async function getGalleryImages() {
  const res = await fetch(
    `https://api.airtable.com/v0/app9bv9UvKjThupFL/Gallery`,
    {
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
      },
    }
  );
  const data = await res.json();

  return data;
}
