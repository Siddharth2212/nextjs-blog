import Head from 'next/head'
import Layout from '../components/layout'
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout metatitle="hello" title="Tech News & Digital Marketing Jobs | NewsApp" navmenu={false} profileimage={'aiheog'}>

      <Container>
        <h1>
          Newsapp.io Privacy Policy
        </h1>
        <h3>What information do we collect?</h3>
                        <p>We collect information from you when you place an order, subscribe to our newsletter, respond to a survey or fill out a form. </p>
                        <p>When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, phone number or City. You may, however, visit our site anonymously.</p>
                        <h3>What do we use your information for?</h3>
                        <p>Any of the information we collect from you may be used in one of the following ways: </p>
                        <p>- To process transactions</p>
                        <p>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</p>
                        <p>- To administer a contest, promotion, survey or other site feature</p>
                        <p>- To send periodic emails</p>
                        <p>The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.<br />
                            Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.</p>
                        <h3>Do we use cookies?</h3>
                        <p>We do not use cookies.</p>
                        <h3>Do we disclose any information to outside parties?</h3>
                        <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
                        <h3>Third party links</h3>
                        <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
                        <h3>Online Privacy Policy Only</h3>
                        <p>This online privacy policy applies only to information collected through our website and not to information collected offline.</p>
                        <h3>Your Consent</h3>
                        <p>By using our site, you consent to our websites privacy policy.</p>
                        <h3>Changes to our Privacy Policy</h3>
                        <p>If we decide to change our privacy policy, we will post those changes on this page. </p>
                        <br /><br /><br />
        <Container>
          <Row className="justify-content-md-between">
          </Row>  
        </Container>
      </Container>
      </Layout>
  )
}