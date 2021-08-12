import React from 'react';
import Head from 'next/head';

const destination = '/Egidio%20Caprino%20egidio.caprino@gmail.com-(0x6D6E85DE911A584A)-public.asc';

export const getStaticProps = async () => ({
  redirect: {
    destination,
    permanent: true,
  },
});

export default () => (
  <Head>
    <meta http-equiv="refresh" content={`7; url='${destination}'`} />
  </Head>
);
