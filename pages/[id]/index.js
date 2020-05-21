import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap'
import Trending from "../../components/TrendingComponent";

const Post = ({ post }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={8}>
            {
              post.feeds.map((newsfeed) => {
                return (
                  <Card className="mb-4">
                    <Card.Img variant="top" src={newsfeed.approved_image} />
                    <Card.Body>
                      <Card.Title>{newsfeed.approved_title}</Card.Title>
                      <Card.Text>
                        {newsfeed.approved_description}
                      </Card.Text>
                      <Link href="/[id]/[comment]" as={`/${id}/first-comment`}>
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
  console.log("HELLO");
  return fetch(
    `https://www.newsapp.io/feed/data?category=2`
  )
    .then(result => {
      return result.json()
    })
    .then(post => ({ props: { post } }));
}

export default Post
