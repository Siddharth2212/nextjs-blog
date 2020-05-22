import { useRouter, Router } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap'
import Trending from "../../components/TrendingComponent";
import Share from "../../components/Share";
import classnames from 'classnames';
import React, { useState, useEffect } from "react";
import Page from '../../components/page'
import Loader from '../../components/loader';

export default class Category extends Page {


  constructor(props) {
    super(props)
    this.state = {
      feeds: props.post.feeds,
      catId: props.catId,
      size: 20
    }
  }

  async  showMore() {
    return fetch(
      `/api/feed?category=${this.state.catId}&size=${this.state.size}`
    )
      .then(result => {
        return result.json()
      })
      .then(post => {
        this.setState({ size: this.state.size + 10 })
        this.setState({ feeds: post.feeds });
        return;
      });
  }

  async componentDidMount() {
    console.log("HEREE");
    console.log(this.state.catId);
  }

  componentWillReceiveProps(nextProps) { // or componentDidUpdate
    console.log("hello");
    this.setState({
      feeds: nextProps.post.feeds,
      catId: nextProps.catId
    })
  }

  render() {
    let catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']
    let catArray2 = ['Home', 'Search engine optimization', 'Search engine marketing', 'Analytics', 'Content marketing', 'Mobile', 'Social-media-marketing', 'Google-adwords', 'Facebook', 'India jobs', 'International-jobs', 'Freelancing jobs', 'Artificial Intelligence', 'Entrepreneurship', 'Digital marketing tips', 'Post', 'Snapchat', 'Instagram', 'Twitter', 'Whatsapp', 'Youtube', 'Cyber security', 'Technology tips']
    if (this.state.feeds.length > 0) {
      return (
        <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>
          <Container>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>{catArray2[this.state.catId]}</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col className="cardlist" md={8}>
                {
                  this.state.feeds.map((newsfeed) => {
                    return (
                      <Card key={newsfeed.newsid} className="mb-4">
                        <Link href="/[id]/[comment]" as={`/${catArray[this.state.catId]}/${newsfeed.newsid}`}>
                          <Card.Img style={{ cursor: "pointer" }} variant="top" src={newsfeed.approved_image} />
                        </Link>
                        <Card.Body>
                          <Link href="/[id]/[comment]" as={`/${catArray[this.state.catId]}/${newsfeed.newsid}`}>
                            <Card.Title style={{ cursor: "pointer", fontWeight: "bolder" }}>{newsfeed.approved_title}</Card.Title>
                          </Link>
                          <Share newsid={newsfeed._id} text={newsfeed.approved_description} url={`${catArray[parseInt(newsfeed.category)]}/${newsfeed.newsid}`} />

                          <Card.Text className="mt-2">
                            {newsfeed.approved_description}
                          </Card.Text>
                          <Link href="/[id]/[comment]" as={`/${catArray[this.state.catId]}/${newsfeed.newsid}`}>
                            <Button variant="primary">Read More</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    );
                  })
                }
              </Col>
              <Col className="d-none d-md-block" md={4}>
                <Trending />
              </Col>
            </Row>
            <Row className="justify-content-center col-md-8">
              <Button className={classnames({
                'showmore': true,
                'mb-2': true
              })} onClick={(e) => this.showMore(e)} color="primary" size="lg">Read More</Button>

            </Row>
          </Container>
        </Layout>
      )
    }
    else {
      return (
        <Loader />
      )
    }
  }
}

export async function getServerSideProps({ query }) {
  const catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']
  let catId = catArray.indexOf(query.id)
  return fetch(
    `https://nextfast.herokuapp.com/feed/data?category=${catId}`
  )
    .then(result => {
      return result.json()
    })
    .then(post => ({ props: { post, catId } }));
}