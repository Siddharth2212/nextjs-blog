import Link from 'next/link'
import { useUser } from '../lib/hooks'
import Package from '../package'
import styles from './header.module.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Router from 'next/router'
const Header = ({ onChange }) => {
  let cityInput
  const user = useUser()
  function searchFeeds(event) {
    event.preventDefault()
    console.log("jpaeg");
    console.log(cityInput.value)
    Router.push(`/search?searchquery=${cityInput.value}`)
    // console.log(this.inputNode.value)
 }
  return (
    <header>
      <Navbar bg="dark" expand="lg">
        <Link prefetch href="/">
          <Navbar.Brand className={styles.navbarbrand} href="/">
            <span className="icon ion-md-home mr-1"></span> {Package.name}
          </Navbar.Brand>
        </Link>  <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mr-auto ${styles.navbarnav}`}>
            <Link href="/[id]" as={`/search-engine-optimization`}>
              <Nav.Link className={styles.navlink} href="#home">
                SEO
            </Nav.Link></Link>
            <Link href="/[id]" as={`/search-engine-marketing`}>
              <Nav.Link className={styles.navlink} href="#home">
                SEM
            </Nav.Link>
            </Link>
            <Link href="/[id]" as={`/mobile`}>
              <Nav.Link className={styles.navlink} href="#home">
                Mobile
            </Nav.Link>
            </Link>
            <Link href="/[id]" as={`/analytics`}>
              <Nav.Link className={styles.navlink} href="#home">
                Analytics
            </Nav.Link>
            </Link>
            <Link href="/[id]" as={`/content-marketing`}>
              <Nav.Link className={styles.navlink} href="#home">
                Content
            </Nav.Link>
            </Link>
            <Link href="/[id]" as={`/entrepreneurship`}>
              <Nav.Link className={styles.navlink} href="#home">
                Start-ups
            </Nav.Link>
            </Link>
            <NavDropdown title="Social" id="basic-nav-dropdown">
              <Link href="/[id]" as={`/facebook`}>
                <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/twitter`}>
                <NavDropdown.Item href="#action/3.2">Twitter</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/youtube`}>
                <NavDropdown.Item href="#action/3.3">Youtube</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/whatsapp`}>
                <NavDropdown.Item href="#action/3.4">Whatsapp</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/instagram`}>
                <NavDropdown.Item href="#action/3.5">Instagram</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/snapchat`}>
                <NavDropdown.Item href="#action/3.6">Snapchat</NavDropdown.Item>
              </Link>
              </NavDropdown>
              <NavDropdown title="Technology" id="basic-nav-dropdown">
              <Link href="/[id]" as={`/artificial-intelligence`}>
                <NavDropdown.Item href="#action/4.1">AI</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/cyber-security`}>
                <NavDropdown.Item href="#action/4.2">Cyber Security</NavDropdown.Item>
              </Link>
              </NavDropdown>
              <NavDropdown title="Tips" id="basic-nav-dropdown">
              <Link href="/[id]" as={`/digital-marketing-tips`}>
                <NavDropdown.Item href="#action/5.1">Digital Marketing Tips</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/technology-tips`}>
                <NavDropdown.Item href="#action/5.2">Technology Tips</NavDropdown.Item>
              </Link>
              </NavDropdown>
              <Link href="/[id]" as={`/post`}>
              <Nav.Link className={styles.navlink} href="#home">
                Guest Posts
            </Nav.Link>
            </Link>
            <NavDropdown title="Jobs" id="basic-nav-dropdown">
              <Link href="/[id]" as={`/india-jobs`}>
                <NavDropdown.Item href="#action/6.1">India Jobs</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/international-jobs`}>
                <NavDropdown.Item href="#action/6.2">International Jobs</NavDropdown.Item>
              </Link>
              <Link href="/[id]" as={`/freelancing-jobs`}>
                <NavDropdown.Item href="#action/6.3">Freelancing Jobs</NavDropdown.Item>
              </Link>
              </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" name="username" ref={ el => cityInput = el } placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" onClick={(e) => searchFeeds(e)}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <style jsx>{`
        nav {
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:first-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        header {
          color: #fff;
          background-color: #2196f3;
        }
      `}</style>
    </header>
  )
}

export default Header
