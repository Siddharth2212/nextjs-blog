import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import { Container, Row, Col, Card, Button, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'
let catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']
let catArray2 = ['Home', 'Search engine optimization', 'Search engine marketing', 'Analytics', 'Content marketing', 'Mobile', 'Social-media-marketing', 'Google-adwords', 'Facebook', 'India jobs', 'International-jobs', 'Freelancing jobs', 'Artificial Intelligence', 'Entrepreneurship', 'Digital marketing tips', 'Post', 'Snapchat', 'Instagram', 'Twitter', 'Whatsapp', 'Youtube', 'Cyber security', 'Technology tips']
import classnames from 'classnames';
import { EXTRACTHOSTNAME } from "../utils/extracthostname";
import { GETHOSTNAME } from "../utils/gethostname";
import { TIMESINCE } from "../utils/timesince";
import Trending from "../components/TrendingComponent";
import Share from "../components/Share";
import {useState, useEffect} from "react"
import Loader from "../components/loader";



const Home = ({ post, searchquery }) => {
  const user = useUser()

  useEffect(() => {
    console.log("hello");
    console.log(post);
    setFeeds(post.feeds)
 }, [post]) 
const [feeds, setFeeds] = useState(post.feeds);
const [size, setSize] = useState(18);
const [loading, setLoading] = useState(false);


 async function showMore() {
   setLoading(true);
  return fetch(
    `api/searchfeeds?size=${size}&searchString=${searchquery}`
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
      setLoading(false)
      return;
    });
}
    if(!feeds){
        return <Loader/>
    }
    else if(feeds.length==0){
        return(
        <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>
        <Container>
        <Row className="mt-1 d-none d-md-block">
          <Breadcrumb>
            <Breadcrumb.Item><Link href="/"><a>Home</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item active>
            Search
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Showing results for your search query: {searchquery}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
            <Col>
            <div>No data found for your search query. Try using different keywords</div>
            </Col>
        </Row>
        </Container>
        </Layout>)
    }
  else if(feeds.length>0){
    return (
      <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>
        <Container>
        <Row className="mt-1 d-none d-md-block">
          <Breadcrumb>
            <Breadcrumb.Item><Link href="/"><a>Home</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item active>
            Search
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Showing results for your search query: {searchquery}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
          <Row>
            {feeds.map((newsfeed) => (
              <Col key={`newsfeed_${newsfeed.newsid}`} md={4} className={classnames({
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
                    <Share width="1.6rem" newsid={newsfeed._id} text={newsfeed.approved_description} url={`${catArray[parseInt(newsfeed.category)]}/${newsfeed.newsid}`} />
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
          {loading == true? <Loader/>: <Row className="justify-content-center">
                <Button className={classnames({
                  'showmore': true,
                  'mb-2': true
                })} onClick={(e) => showMore(e)} color="primary" size="lg">Read More</Button>
  
              </Row>}
          
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
}

export async function getServerSideProps({ query }) {
  console.log("HELLO");
  console.log(query);
  let searchquery = query.searchquery
  return fetch(
    `https://nextfast.herokuapp.com/searchfeed?searchString=${searchquery}`
  )
    .then(result => {
      return result.json()
    })
    .then(post => ({ props: { post, searchquery } }));
}

export default Home
