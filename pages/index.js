import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import { Container, Row, Col, Card, Button, Carousel, CarouselItem, CarouselProps } from 'react-bootstrap'
import Link from 'next/link'
let catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']
let catArray2 = ['Home', 'Search engine optimization', 'Search engine marketing', 'Analytics', 'Content marketing', 'Mobile', 'Social-media-marketing', 'Google-adwords', 'Facebook', 'India jobs', 'International-jobs', 'Freelancing jobs', 'Artificial Intelligence', 'Entrepreneurship', 'Digital marketing tips', 'Post', 'Snapchat', 'Instagram', 'Twitter', 'Whatsapp', 'Youtube', 'Cyber security', 'Technology tips']
import classnames from 'classnames';
import { EXTRACTHOSTNAME } from "../utils/extracthostname";
import { GETHOSTNAME } from "../utils/gethostname";
import { TIMESINCE } from "../utils/timesince";
import Trending from "../components/TrendingComponent";



const Home = ({ post }) => {
  const user = useUser()

  return (
    <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>
      <Container>
        <Row>
          <Col md={8}>
            <Carousel>
              {post.feeds.slice(0, 3).map((newsfeed) => (

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={newsfeed.approved_image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
              <h3>{newsfeed.approved_title}</h3>
              <p>{newsfeed.approved_description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={4}>
          <Trending recentdocs={post.feeds} trendingdocs={post.feeds}/>          
          </Col>
        </Row>
        <Row>
          {post.feeds.map((newsfeed) => (
            <Col md={4} className={classnames({
              'pt-2': true,
              'pb-2': true,
              'd-flex': true,
              'align-items-stretch': true
            })}>
              <Card className="mb-3">
                <Link as={`/${catArray[parseInt(newsfeed.category)]}/${newsfeed.newsid}`} href={`/story?id=${newsfeed.newsid}`}>
                  <div className={classnames({
                    'cursor-pointer': true
                  })}>
                    <Card.Img className="cursor-pointer" top width="100%" src={newsfeed.approved_image} alt={newsfeed.name} />
                  </div>
                </Link>
                <Card.Body>
                  <Link as={`/${catArray[parseInt(newsfeed.category)]}`} href={`/category?id=${newsfeed.category}`}>
                    <a className="post-catagory">{catArray2[newsfeed.category]}</a>
                  </Link>
                  <Card.Title>{newsfeed.approved_title}</Card.Title>
                  <div className="pt-1">
                    <i>{TIMESINCE(newsfeed.date)} ago | {<a target="_blank" href={newsfeed.link}>{((typeof newsfeed.added != 'undefined' && newsfeed.added == 'true') ? EXTRACTHOSTNAME(newsfeed.link) : GETHOSTNAME(newsfeed.link.split('url=')[1], newsfeed))}</a>}</i>
                  </div>
                  <Card.Text>{newsfeed.approved_description}</Card.Text>
                  <Link as={`/${catArray[parseInt(newsfeed.category)]}/${newsfeed.newsid}`} href={`/story?id=${newsfeed.newsid}`}>
                    <Button color="primary"><i style={{ color: 'white' }} className="cursor-pointer">Read More</i></Button>
                  </Link>
                </Card.Body>

              </Card>
            </Col>
          ))}

        </Row>
      </Container>

      {user && <p>Currently logged in as: {JSON.stringify(user)}</p>}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        .post-catagory {
          font-size: 14px;
          color: #2196f3;
          font-weight: 700;
          margin-bottom: 10px;
      }
      `}</style>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  console.log("HELLO");
  return fetch(
    `https://www.newsapp.io/feed/data?page=1`
  )
    .then(result => {
      console.log(result);
      return result.json()
    })
    .then(post => ({ props: { post } }));
}

export default Home
