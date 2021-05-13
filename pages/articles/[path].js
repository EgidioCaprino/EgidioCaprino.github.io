import Link from 'next/link';
import Layout from '../../components/Layout';
import getArticles from '../../shared/libs/getArticles';
import getFullArticle from '../../shared/libs/getFullArticle';

const pathRegExp = /^([0-9]+)-.+$/;

export const getStaticProps = async ({ params }) => {
  const { path } = params;
  const [, id] = pathRegExp.exec(path);
  const article = await getFullArticle(parseInt(id));
  return {
    props: {
      ...article,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getArticles().map(({ id, name }) => ({
    params: {
      path: `${id}-${name}`,
    },
  }));
  return { paths, fallback: false };
};

export default ({ title, content, formattedDate }) => (
  <Layout title={ title }>
    <div className="container">
      <div className="row mb-4 mt-4">
        <div className="col-8 offset-2">
          <Link href="/">
            <a>Go back</a>
          </Link>
          <h1>{ title }</h1>
          <p className="text-muted">{ formattedDate }</p>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2">
          <div style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  </Layout>
);
