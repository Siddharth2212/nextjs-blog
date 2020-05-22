import React, { Component } from 'react';
import { Tabs, Tab, Media, TabContent, Container, Row, Col, Nav, NavItem, NavLink } from 'react-bootstrap';
import classnames from 'classnames';
import Link from 'next/link'
import { TIMESINCE } from "../utils/timesince";
import { useUser } from '../lib/hooks'
import Package from '../package'
import Loader from './loader';
import useSWR from 'swr'
import styles from './trending.module.css'

const fetcher = url => fetch(url).then(r => r.json())

var catArray = ['home', 'search-engine-optimization', 'search-engine-marketing', 'analytics', 'content-marketing', 'mobile', 'social-media-marketing', 'google-adwords', 'facebook', 'india-jobs', 'international-jobs', 'freelancing-jobs', 'artificial-intelligence', 'entrepreneurship', 'digital-marketing-tips', 'post', 'snapchat', 'instagram', 'twitter', 'whatsapp', 'youtube', 'cyber-security', 'technology-tips']

const Header = ({ trendingdocs }) => {
  const user = useUser()

  return (
    <Tabs defaultActiveKey="trending" id="uncontrolled-tab-example">
      <Tab eventKey="trending" title="Trending">
        <Profile />
      </Tab>
      <Tab eventKey="latest" title="Latest">
        <Profile2 />
      </Tab>
    </Tabs>
  )
}

function Profile() {
  const { data, error } = useSWR('/api/trending', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <Loader />
  return <Container className={`pt-1 ${styles.container}`}>
    <Row>
      {data.trending.slice(0, 5).map((newsfeed) => (
        <Media key={newsfeed.newsid} className="row align-items-center ml-0">
          <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
          <img
            width={65}
            height={65}
            style={{cursor: "pointer"}}
            className="mr-3"
            src={newsfeed.approved_image}
            alt="Generic placeholder"
          />
          </Link>
          <Media.Body>
          <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.2, cursor: "pointer" }} className="mb-0 pr-3">{newsfeed.approved_title}</p>
            </Link>
            <div><span style={{ color: 'grey', fontSize: '0.8rem' }} className="time">{TIMESINCE(newsfeed.date)} ago</span></div>
          </Media.Body>
        </Media>
      ))}
    </Row>
  </Container>
}

function Profile2() {
  const { data, error } = useSWR('/api/latest', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <Loader />
  return <Container className={`pt-1 ${styles.container}`}>
    <Row>
      {data.feeds.slice(0, 5).map((newsfeed) => (
        <Media key={newsfeed.newsid} className="row align-items-center ml-0">
                    <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
          <img
            width={65}
            height={65}
            style={{cursor: "pointer"}}
            className="mr-3"
            src={newsfeed.approved_image}
            alt="Generic placeholder"
          />
          </Link>
          <Media.Body>
          <Link href="/[id]/[comment]" as={`/${catArray[newsfeed.category]}/${newsfeed.newsid}`}>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.2, cursor: "pointer" }} className="mb-0 pr-3">{newsfeed.approved_title}</p>
            </Link>
            <div><span style={{ color: 'grey', fontSize: '0.8rem' }} className="time">{TIMESINCE(newsfeed.date)} ago</span></div>
          </Media.Body>
        </Media>
      ))}
    </Row>
  </Container>
}

export default Header
