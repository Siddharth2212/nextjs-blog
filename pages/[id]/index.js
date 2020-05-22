import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap'
import Trending from "../../components/TrendingComponent";

const Post = ({ post }) => {
  const catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']
  const catArray2 = ['Home', 'Search engine optimization', 'Search engine marketing', 'Analytics', 'Content marketing', 'Mobile', 'Social-media-marketing', 'Google-adwords', 'Facebook', 'India jobs', 'International-jobs', 'Freelancing jobs', 'Artificial Intelligence', 'Entrepreneurship', 'Digital marketing tips', 'Post', 'Snapchat', 'Instagram', 'Twitter', 'Whatsapp', 'Youtube', 'Cyber security', 'Technology tips']
  const router = useRouter()
  const { id } = router.query
  var catId = catArray.indexOf(id);
  var catName = catArray2[catId];
  return (
    <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>{catName}</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={8}>
            {
              post.feeds.map((newsfeed) => {
                return (
                  <Card className="mb-4">
                    <Link href="/[id]/[comment]" as={`/${id}/${newsfeed.newsid}`}>
                      <Card.Img style={{ cursor: "pointer" }} variant="top" src={newsfeed.approved_image} />
                    </Link>
                    <Card.Body>
                      <Link href="/[id]/[comment]" as={`/${id}/${newsfeed.newsid}`}>
                        <Card.Title style={{ cursor: "pointer", fontWeight: "bolder" }}>{newsfeed.approved_title}</Card.Title>
                      </Link>
                      <Card.Text>
                        {newsfeed.approved_description}
                      </Card.Text>
                      <Link href="/[id]/[comment]" as={`/${id}/${newsfeed.newsid}`}>
                        <Button variant="primary">Read More</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                );
              })
            }
          </Col>
          <Col md={4}>
            <Trending recentdocs={post.feeds} trendingdocs={post.feeds} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']
  let catId = catArray.indexOf(query.id)
  return fetch(
    `https://www.newsapp.io/feed/data?category=${catId}`
  )
    .then(result => {
      return result.json()
    })
    .then(post => ({ props: { post } }));
}

export default Post
