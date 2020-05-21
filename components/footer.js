import Link from 'next/link'
import { useUser } from '../lib/hooks'
import Package from '../package'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
const Header = () => {
  const user = useUser()

  return (
    <footer className="footer pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo">
              <h3>NewsApp.io</h3>
            </div>

            <strong>About NewsApp.io</strong>
            <div className="logo">
              <a target="_blank" href={`https://www.facebook.com/newsappio`} className="btn-social-icon">
                <i style={{ color: '#3b5998', fontSize: '2.25rem' }} className="icon icon ion-logo-facebook"></i>
              </a>
              <a target="_blank" href={`https://twitter.com/newsappdotio`} className="btn-social-icon">
                <i style={{ color: '#38A1F3', fontSize: '2.25rem' }} className="icon icon ion-logo-twitter"></i>
              </a>
              <a target="_blank" href={`mailto:info@ampdigitalnet.com`} className="btn-social-icon">
                <i style={{ color: 'blue', fontSize: '2.25rem' }} className="icon icon ion-md-mail"></i>
              </a>
            </div>
            <p>NewsApp.io is a Global Media and Information Platform providing Latest News and Job Opportunities from all the fields related to Technology and Digital Marketing.</p>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4">
                <h4 className="text-thin">Navigation</h4>
                <div className="d-flex flex-wrap">
                  <ul className="navigation list-unstyled">
                    <li><Link href="/">Home </Link></li>
                    <li><Link href="/privacypolicy">Privacy Policy </Link></li>
                    <li><Link href="/termsofservice">Terms of Service </Link></li>
                    <li><Link href="/aboutus">About Us </Link></li>
                    <li><Link href="/contactus">Contact Us </Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 newsletter">
                <h4 className="text-thin">Newsletter</h4>
                <p>Subscribe to the Weekly Newsletter to Stay Updated With Weekly Top Stories</p>
                {/* <div>
                                    <Form>
                                        <FormGroup>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Your email address" />
                                        </FormGroup>
                                        <Button>Submit</Button>
                                    </Form>
                                </div> */}
              </div>
              <div className="col-lg-4 newsletter">
                <h4 className="text-thin">Location</h4>
                <p>AMP Digital, Unit Number 221, JMD Megapolis, Sector 48, Sohna Road, Gurugram, Haryana 122018 </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <p className="text-muted small">
                <span>newsapp.io built with Mongo, Express, React 16.6.3, Node</span>
                <span>is brought to you by <a className="color-white" href="http://www.ampdigitalnet.com">AMP Digital</a>. AMP Digital is into digital marketing services and training.</span>
                <span className="ml-2">© 2020 AMP Digital .</span></p>
              {/*<p>NewsApp.io is brought to you by <a className="color-white" href="http://www.ampdigitalnet.com">AMP Digital</a>. AMP Digital is into digital marketing services and training.</p>*/}
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
      .footer {
        position: absolute;
        width: 100%;
        left: 0;
        background-color: #BBDEFB;
        margin: 0 auto;
        padding: 20px 0
      }
footer a:focus,
footer a:hover {
  font-size: 1rem
}
.footer-add-area {
  position: relative;
  z-index: 1;
  padding: 50px 0
}

.footer-add-area .footer-add a {
  display: block
}

.footer-add-area .footer-add a img {
  width: 100%
}

.footer-area {
  position: relative;
  z-index: 1;
  width: 100%;
  background-color: #02031c
}

.footer-area .footer-widget-area {
  position: relative;
  z-index: 1
}

.footer-area .footer-widget-area .widget-title {
  display: block;
  margin-bottom: 30px;
  color: #fff
}

.footer-area .footer-widget-area .list {
  position: relative;
  z-index: 1
}

.footer-area .footer-widget-area .list li {
  display: block
}

.footer-area .footer-widget-area .list li a {
  display: block;
  padding: 5px 0;
  color: rgba(255, 255, 255, .5)
}

.footer-area .footer-widget-area .list li a:focus,
.footer-area .footer-widget-area .list li a:hover {
  color: #fff
}

.footer-area .bottom-footer-area {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 70px
}

.footer-area .bottom-footer-area p {
  color: rgba(255, 255, 255, .5);
  margin-bottom: 0
}

.footer-area .bottom-footer-area p a {
  color: rgba(255, 255, 255, .5)
}

.footer-area .bottom-footer-area p a:focus,
.footer-area .bottom-footer-area p a:hover {
  color: #fff
}
      `}</style>
    </footer>
  )
}

export default Header
