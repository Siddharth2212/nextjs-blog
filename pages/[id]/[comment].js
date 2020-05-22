import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap'
import Trending from "../../components/TrendingComponent";
import Recommended from "../../components/RecommendedComponent";
import classnames from 'classnames';
import { TIMESINCE } from "../../utils/timesince";

const Post = ({ post, category }) => {
  const router = useRouter()
  const { id } = router.query
  let catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']
  let catArray2 = ['Home', 'Search engine optimization', 'Search engine marketing', 'Analytics', 'Content marketing', 'Mobile', 'Social-media-marketing', 'Google-adwords', 'Facebook', 'India jobs', 'International-jobs', 'Freelancing jobs', 'Artificial Intelligence', 'Entrepreneurship', 'Digital marketing tips', 'Post', 'Snapchat', 'Instagram', 'Twitter', 'Whatsapp', 'Youtube', 'Cyber security', 'Technology tips']
  var catId = catArray.indexOf(category);
  var catName = catArray2[catId];
  return (
    <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>
      <Container>
        <Row className="mt-1 d-none d-md-block">
          <Breadcrumb>
            <Breadcrumb.Item><Link href="/"><a>Home</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item>
            <Link href="/[id]" as={`/${category}`}>
                    {catName}
                  </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{post.feeds[0].approved_title}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col className="cat-aud" md="12">
            <div className="author-details"> <div className="loop-date"> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(post.feeds[0].date)))} <strong> </strong> <span> </span></div>

            </div>
          </Col>
          <h1 className="amp-post-title mb-2"> {post.feeds[0].approved_title} </h1>
        </Row>
        <Row>
          <Col md={8}>
            {
              post.feeds.map((newsfeed) => {
                return (
                  <Card className="mb-4" style={{ border: "none" }}>
                    <Card.Img variant="top" src={newsfeed.approved_image} />
                    <Card.Body style={{ background: "#f0f2f5" }}>
                      <Card.Text>
                        <div className="mb-3" dangerouslySetInnerHTML={{ __html: newsfeed.longapproved_description }}></div>
                        <a className="mt-2" href="{this.props.data.link}"> Read more at </a>
                      </Card.Text>
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
        <Row className={classnames({
          'justify-content-center': true
        })}>
            <Recommended category={post.feeds[0].category} date={post.feeds[0].date} newsid={post.feeds[0].newsid} />

        </Row>
      </Container>
      <style jsx>{`
       @media (min-width: 276px)
       {.amp-post-title {
         font-size: 30px;
         line-height: 1.2;
         font-weight: 900;
     }}
      @media (min-width: 768px)
      {.amp-post-title {
        font-size: 30px;
        line-height: 1.2;
        margin: 15px 0 10px;
        font-weight: 900;
    }}
      @media (min-width: 992px)
      {.amp-post-title {
        font-size: 50px;
        line-height: 1.2;
        margin: -4px 0 -6px;
        font-weight: 900;
    }}
      `}</style>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  console.log("HELLOhaipeghapieghapi");
  console.log(query)
  return fetch(
    `https://www.newsapp.io/feed/data?newsid=${query.comment}`
  )
    .then(result => {
      return result.json()
    })
    .then(post => {
      console.log(post);
      var category = query.id;
      return { props: { post, category } };z
    });
}

export default Post
