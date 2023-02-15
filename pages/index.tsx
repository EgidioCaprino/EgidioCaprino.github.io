import React from 'react';
import Head from 'next/head';
import Highlight from 'react-highlight';
import { useWindupString } from 'windups';

const presentationCode = `
  const name = 'Egidio Caprino';
  const role = 'Software Developer & DevOps Engineer';
  const location = 'Vicenza, Italy';
  const email = 'egidiocaprino@duck.com';
  const twitter = '@EgidioCaprino';
`;

export default function Home() {
  const [presentation] = useWindupString(presentationCode, {
    pace: () => 50,
  });

  return (
    <>
      <Head>
        <title>Egidio Caprino - Software Developer & DevOps Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Highlight className="md:text-3xl javascript">
        {presentation}
      </Highlight>
    </>
  );
}
