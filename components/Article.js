import Link from 'next/link';

export default ({ id, url, title, formattedDate }) => (
  <li key={id}>{ title } - { formattedDate } - <Link href={url}><a>Read</a></Link></li>
);
