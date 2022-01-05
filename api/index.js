const handler = async (request) => {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get('year');
  if (year === null || year === '') {
    return new Response(
      JSON.stringify({
        error: 'no year specified.',
      })
    );
  }
  if (!/^\d+$/.test(year)) {
    return new Response(
      JSON.stringify({
        error: 'year may only contain digits.',
      })
    );
  }
  const leap = !(year % 400) || (!!(year % 100) && !(year % 4));
  return new Response(
    JSON.stringify({
      result: leap ? true : false,
    })
  );
};

addEventListener('fetch', (event) => {
  event.respondWith(handler(event.request));
});
