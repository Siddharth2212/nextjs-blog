import Link from 'next/link'
import { useUser } from '../lib/hooks'
import Package from '../package'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
const Header = () => {
  const user = useUser()

  return (
    <header>
     <Navbar bg="dark" expand="lg">
                <Link prefetch href="/">
                  <Navbar.Brand href="/">
                      <span className="icon ion-md-home mr-1"></span> {Package.name}
                  </Navbar.Brand>
              </Link>  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">SEO</Nav.Link>
      <Nav.Link href="#link">SEM</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
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
