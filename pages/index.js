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
import {useState} from "react"
import Loader from "../components/loader";



const Home = ({ post }) => {
  const user = useUser()

//   useEffect(() => {
//     console.log("hello");
//     console.log(post);
//  }, [post]) 
const [feeds, setFeeds] = useState(post.feeds);
const [size, setSize] = useState(18);


 async function showMore() {
  return fetch(
    `api/feeds?size=${size}`
  )
    .then(result => {
      return result.json()
    })
    .then(post => {
      console.log("ahoeghaeig");
      console.log(post);
      setSize(size + 9)
      setFeeds(post.feeds);
      console.log(feeds);
      return;
    });
}

  if(feeds.length>0){
    return (
      <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>
        <Container>
          <Row>
            <Col md={8}>
              <Carousel>
                {feeds.slice(0, 3).map((newsfeed) => (
  
                  <Carousel.Item style={{postition: "relative"}}>
                    <img
                      className="d-block w-100"
                      src={newsfeed.approved_image}
                      alt="First slide"
                      style={{height: "fit-content"}}
                    />
                    <div class="black-overlay" style={{position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  background: "rgba(0,0,0,0.6)"}}></div>
                    <Carousel.Caption>
                      <h3>{newsfeed.approved_title}</h3>
                      <p>{newsfeed.approved_description}</p>
                      <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
                      <Button color="primary"><i style={{ color: 'white' }} className="cursor-pointer">Read More</i></Button>
                    </Link>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={4}>
              <Trending recentdocs={post.feeds} trendingdocs={post.feeds} />
            </Col>
          </Row>
          <Row>
            {feeds.map((newsfeed) => (
              <Col md={4} className={classnames({
                'pt-2': true,
                'pb-2': true,
                'd-flex': true,
                'align-items-stretch': true
              })}>
                <Card className="mb-3">
                  
                <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
                       <Card.Img className="cursor-pointer" top width="100%" src={newsfeed.approved_image} alt={newsfeed.name} />
                              </Link>
                  <Card.Body>
                  <Link href="/[id]" as={`/${catArray[newsfeed.category]}`}>
                      <a className="post-catagory">{catArray2[newsfeed.category]}</a>
                    </Link>
                    <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
                    <Card.Title className="cursor-pointer">{newsfeed.approved_title}</Card.Title>
                    </Link>
                    <div style={{fontSize: "0.8rem"}} className="pt-1">
                      <i>{TIMESINCE(newsfeed.date)} ago | {<a style={{color: "#828282"}} target="_blank" href={newsfeed.link}>{((typeof newsfeed.added != 'undefined' && newsfeed.added == 'true') ? EXTRACTHOSTNAME(newsfeed.link) : GETHOSTNAME(newsfeed.link.split('url=')[1], newsfeed))}</a>}</i>
                    </div>
                    <Card.Text>{newsfeed.approved_description}</Card.Text>
                    <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
                      <Button color="primary"><i style={{ color: 'white' }} className="cursor-pointer">Read More</i></Button>
                    </Link>
                  </Card.Body>
  
                </Card>
              </Col>
            ))}
  
          </Row>
          <Row className="justify-content-center">
                <Button className={classnames({
                  'showmore': true,
                  'mb-2': true
                })} onClick={(e) => showMore(e)} color="primary" size="lg">Read More</Button>
  
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
  else{
    return <Loader/>
  }
}

export async function getServerSideProps({ query }) {
  console.log("HELLO");
  return fetch(
    `https://www.newsapp.io/feed/data?page=1`
  )
    .then(result => {
      return result.json()
    })
    .then(post => ({ props: { post } }));
}

export default Home
