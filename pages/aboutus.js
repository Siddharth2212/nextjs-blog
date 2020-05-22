import Head from 'next/head'
import Layout from '../components/layout'
import { Container, Row, Col, Card, Button, Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import Link from 'next/link'

export default function Home() {
    return (
        <Layout metatitle="hello" title="About Us" navmenu={false} profileimage={'aiheog'}>
            <Row className="mt-1 d-none d-md-block">
                <Breadcrumb>
                    <BreadcrumbItem><Link href="/"><a>Home</a></Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <Row>
                <div className="col-12 col-md-12">
                    <h2>About NewsApp.io</h2>
                    <p>
                        NewsApp.io is a Global Media and Information Platform providing Latest News and Job Opportunities for all the fields related to Technology and Digital Marketing. NewsApp.io is an ambitous initiative, started in 2017 by AMP Digital, to serve as a single platform providing all Digital Marketing Updates and Information from across the Globe.
                        </p>
                    <p>
                        The very reason for our existence is to help People Stay Relevant in this Ever Changing Market by providing them the Latest and Most Important updates in the Simplest Form.
                        </p>
                </div>
                <div className="col-12 col-md-5 d-none">
                    <Card>
                        <Card.Header className="bg-primary text-white">Facts At a Glance</Card.Header>
                        <Card.Body>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 d-none">
                    <Card>
                        <Card.Body className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">i would have written a shorter letter but i did not have the time</p>
                                <footer className="blockquote-footer">Mark Twain,
                                        <cite title="Source Title"> American writer, humorist, entrepreneur, publisher, and lecturer</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            <Row>
                <Col md={8} className="text-content">
                    <p style={{fontWeight: "bolder", fontSize: "larger"}}>Amitabh Verma</p>
                    <p className="">
                        Amitabh Verma is a business leader with extensive experience in Digital Marketing, Sales, Operations and Customer Service and has worked for global MNCs as well as startups. Amitabh is currently the CEO and Founder of AMP Digital.
                            <br /><br />
                            Before this, Amitabh was with Google India, where he worked as the Head of Global SMB Services where his team worked with millions of SMB advertisers globally. During his 7+ years at Google, Amitabh also led the Search Quality, Ad Spam and Shopping teams where he worked with advertisers, merchants and buyers on the Google platform. Before Google, Amitabh was part of ICICI Bank where he built the VAS vertical for the Credit card teams, apart from leading the western region in credit card sales. Amitabh started his career with Career Launcher, an education corporate.
                        </p>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="mr-3"><strong>Meet Amitabh on</strong></div>
                        <ul className="social-buttons list-inline mb-0">
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/amitabhverma/" className="linkedin mb-0">
                                <div className="icon">
                                    <i className="fa fa-linkedin"></i></div></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/amitabh26" className="twitter mb-0">
                                <div className="icon">                   <i className="fa fa-twitter"></i></div></a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={4}>
                <p><img src="/amitabh.jpeg" alt="..." className="img-fluid rounded-circle" /></p>
                </Col>
            </Row>
        </Layout>
    )
}