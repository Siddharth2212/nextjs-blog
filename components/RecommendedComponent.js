import React, { Component } from 'react';
import { Media, Container, Row, Col, Card } from 'react-bootstrap';
import classnames from 'classnames';
import Link from 'next/link'
import { TIMESINCE } from "../utils/timesince";
import { useUser } from '../lib/hooks'
import Package from '../package'
import Loader from './loader';
import useSWR from 'swr'
import styles from './recommended.module.css'
let catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']
let catArray2 = ['Home', 'Search engine optimization', 'Search engine marketing', 'Analytics', 'Content marketing', 'Mobile', 'Social-media-marketing', 'Google-adwords', 'Facebook', 'India jobs', 'International-jobs', 'Freelancing jobs', 'Artificial Intelligence', 'Entrepreneurship', 'Digital marketing tips', 'Post', 'Snapchat', 'Instagram', 'Twitter', 'Whatsapp', 'Youtube', 'Cyber security', 'Technology tips']


const fetcher = url => fetch(url).then(r => r.json())

const Recommended = ({ newsid, category, date }) => {
  const user = useUser()
  
  return <Profile newsid={newsid} category={category} date={date} />
}

function Profile({newsid, category, date}) {
  console.log("HEAOGHAIEHG");
  console.log(newsid);
  const { data, error } = useSWR(`/api/recommended?date=${date}&category=${category}&newsid=${newsid}`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <Loader />
  let next;
  if(data.prevfeeds && data.prevfeeds.length==1){
    next =  <Col xs={6} className="row justify-content-end">
      <Link href="/[id]/[comment]" as={`/${catArray[data.prevfeeds[0].category]}/${data.prevfeeds[0].newsid}`}>
      <a className={`d-md-none ${styles.prevnextlink}`}>
            <span className={styles.prevnextspan}>Next</span>
                            »
                        </a>
        </Link>
        <Link href="/[id]/[comment]" as={`/${catArray[data.prevfeeds[0].category]}/${data.prevfeeds[0].newsid}`}>
          <a className={`d-none d-md-block ${styles.prevnextlink}`}>
            <span className={styles.prevnextspan}>Next</span><br/>
            {data.prevfeeds.length>0 ? data.prevfeeds[0].approved_title : ""} »
                        </a>
        </Link>
        </Col>
  }
  else{
    next = <div></div>
  }
  let prev;
  if(data.nextfeeds && data.nextfeeds.length==1){
    prev =   <Col xs={6}>
    <Link href="/[id]/[comment]" as={`/${catArray[data.nextfeeds[0].category]}/${data.nextfeeds[0].newsid}`}>
        <a className={`d-md-none ${styles.prevnextlink}`}>
          <span className={styles.prevnextspan}>Previous</span> «
                      </a>
      </Link>
      <Link href="/[id]/[comment]" as={`/${catArray[data.nextfeeds[0].category]}/${data.nextfeeds[0].newsid}`}>
      <a className={`d-none d-md-block ${styles.prevnextlink}`}>
          <span className={styles.prevnextspan}>Previous</span> <br/> «{data.nextfeeds.length>0 ? data.nextfeeds[0].approved_title : ""}
        </a>
      </Link>
      </Col>
  }
  else{
    prev = <div></div>
  }
  return <Container>
    <Row className="w-100">
          <Col md={8}>
            <div id="pagination">
             <Row>
  {prev}
  {next}

             </Row>

              <div className="clearfix"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3 className="mt-5 mb-3 text-center">Recommended For You</h3>
</Col>
        </Row>
    <Row>
      
      {data.recommended.slice(0, 4).map((newsfeed) => (
        <Col md={3}>
        <Card className="mb-4">
        <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
          <Card.Img style={{cursor: "pointer"}} variant="top" src={newsfeed.approved_image} />
          </Link>
          <Card.Body style={{ background: "#f0f2f5" }}>
          <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
            <Card.Title>{newsfeed.approved_title}</Card.Title>
</Link>
            <Card.Text>
              <p className="card-text"><small className="text-time"><em> {TIMESINCE(newsfeed.date)} ago</em></small></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
    <style jsx>{`      
      #pagination a{
        text-decoration: none!important;
      }
      `}</style>
  </Container>
}

export default Recommended
