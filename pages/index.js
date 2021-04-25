import { Linkedin, Twitter, Mail, MapPin } from 'react-feather';
import Experience from '../components/Experience';
import Article from '../components/Article';
import Layout from '../components/Layout';
import getArticles from '../shared/libs/getArticles';

const experiences = [
  {
    role: 'Lead DevOps & Software Developer',
    description: 'at Exprivia from 2019',
    location: 'Vicenza, Italy',
  },
  {
    role: 'Lead Software Developer',
    description: 'at Social Media Emotions from 2017 to 2019',
    location: 'Vicenza, Italy',
  },
  {
    role: 'Software Developer',
    description: 'at Click Travel in 2017',
    location: 'Birmingham, United Kingdom',
  },
  {
    role: 'Software Developer',
    description: 'at Cloudreach from 2015 to 2017',
    location: 'London, United Kingdom',
  },
  {
    role: 'Software Developer',
    description: 'at Anthesi from 2014 to 2015',
    location: 'Tenno, Italy',
  },
  {
    role: 'Software Developer',
    description: 'at Global-IT from 2013 to 2014',
    location: 'Arco, Italy',
  },
  {
    role: 'Software Developer',
    description: 'at Finreale in 2012',
    location: 'Brescia, Italy',
  },
];

const subject = encodeURIComponent('Hello!');
const body = encodeURIComponent('Hi there,');
const mailToUrl = `mailto:egidio.caprino@gmail.com?subject=${subject}&body=${body}`;

export const getStaticProps = async () => {
  const articles = await getArticles();
  return {
    props: {
      articles,
    },
  };
};

export default ({ articles }) => (
  <Layout title="Egidio Caprino - Software Developer">
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron text-center">
            <p className="text-center">
              <img className="rounded-circle img-thumbnail" type="image/svg+xml" src="/me.png" style={{ width: '40%' }} />
            </p>
            <h1 className="display-4">Egidio Caprino</h1>
            <p className="lead">Software Developer</p>
            <p>
              <a href="https://www.linkedin.com/in/egidio-caprino-3042b476/" target="_blank">
                <Linkedin /> Egidio Caprino
              </a>
            </p>
            <p>
              <a href="https://twitter.com/EgidioCaprino" target="_blank">
                <Twitter /> @EgidioCaprino
              </a>
            </p>
            <p>
              <a href={mailToUrl}>
                <Mail /> egidio.caprino@gmail.com
              </a>
            </p>
            <p>
              <MapPin /> Vicenza, Italy
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-md-12">
          <h2>Articles</h2>
          <ul className="list-unstyled">
            { articles.map(Article) }
          </ul>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-md-12">
          <h2>Experience</h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4">
        { experiences.map(Experience) }
      </div>
    </div>
  </Layout>
);
