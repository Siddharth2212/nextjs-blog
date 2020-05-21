import React, {Component}  from 'react';
import { Tabs, Tab, Media, TabContent, Container, Row, Col, Nav, NavItem, NavLink} from 'react-bootstrap';
import classnames from 'classnames';
import Link from 'next/link'
import {TIMESINCE} from "../utils/timesince";
import { useUser } from '../lib/hooks'
import Package from '../package'
import Loader from './loader';
import useSWR from 'swr'
import styles from './trending.module.css'

const fetcher = url => fetch(url).then(r => r.json())

var catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']

const Header = ({trendingdocs}) => {
  const user = useUser()

  return (
    <Tabs defaultActiveKey="trending" id="uncontrolled-tab-example">
    <Tab eventKey="trending" title="Trending">
        <Profile/>
    </Tab>
    <Tab eventKey="latest" title="Latest">
    <Container className={`pt-1 ${styles.container}`}>
        <Row>
        {trendingdocs.slice(0, 5).map((newsfeed) => (
            <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src={newsfeed.approved_image}
              alt="Generic placeholder"
            />
            <Media.Body>
            <p style={{fontSize: "0.8rem"}} className="mb-0">{newsfeed.approved_title}</p>
              <div><span style={{color:'grey', fontSize:'0.8rem'}} className="time">{TIMESINCE(newsfeed.date)} ago</span></div>
                <hr className="m-0" />
            </Media.Body>
          </Media>
          ))}
        </Row>
        </Container>
    </Tab>
  </Tabs>
  )
}

function Profile () {
    const { data, error } = useSWR('/api/trending', fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <Loader/>
    return     <Container className={`pt-1 ${styles.container}`}>
    <Row>
    {data.trending.slice(0, 5).map((newsfeed) => (
        <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={newsfeed.approved_image}
          alt="Generic placeholder"
        />
         <Media.Body>
              <p style={{fontSize: "0.8rem"}} className="mb-0">{newsfeed.approved_title}</p>
              <div><span style={{color:'grey', fontSize:'0.8rem'}} className="time">{TIMESINCE(newsfeed.date)} ago</span></div>
                <hr className="m-0" />
            </Media.Body>
      </Media>
      ))}
    </Row>
    </Container>
  }

export default Header
