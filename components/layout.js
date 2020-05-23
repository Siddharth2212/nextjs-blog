import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Package from '../package'

const Layout = (props) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title || 'Tech News & Digital Marketing jobs | NewsApp'}</title>
      <link rel="icon" type="image/x-icon" href="/faviconpic.png" />
      <meta name="description" content={props.metatitle || 'NewsApp provides the latest News & Job Opportunities in Digital Marketing field globally. News App also covers the areas of  Analytics, Technology & Gadgets.'} />
      <meta name="keywords" content={'Digital Marketing News,Digital Marketing Jobs,SEO News,SEM News,Social Media Marketing,Search Engine Optimisation,Content Marketing,news app, news'} />
      <meta property="fb:pages" content="335728363532837" />
      <meta property="og:url" content={Package.homepage} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={'Tech News & Digital Marketing jobs | NewsApp'} />
      <meta property="og:description" content={'NewsApp provides the latest News & Job Opportunities in Digital Marketing field globally. News App also covers the areas of  Analytics, Technology & Gadgets.'} />
      <meta property="og:image" content={'https://ampdigital.s3-us-west-2.amazonaws.com/findmyfone_google.jpg'} />
      <script type='application/ld+json' dangerouslySetInnerHTML={
        {
          __html: `{
                    "@context": "http://schema.org",
                    "@type": "WebSite",
                    "name": ${'Tech News & Digital Marketing jobs | NewsApp'},
                    "aggregateRating": { "@type": "AggregateRating", "ratingValue": ${Math.round(((Math.random() * 0.99) + 4) * 100) / 100}, "bestRating": "5", "reviewCount": ${Math.floor(Math.random() * 250) + 1} },
                    "alternateName": "NewsApp",
                    "url": ${Package.homepage},
                    "logo": "https://nextfast.herokuapp.com/logoimg.webp",
                    "image": ${'https://ampdigital.s3-us-west-2.amazonaws.com/findmyfone_google.jpg'},
                    "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+919971060035",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["English","Hindi"]
                },
                    "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://nextfast.herokuapp.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
                    "sameAs": [
                    "https://www.facebook.com/newsappio",
                    "https://www.twitter.com/newsappdotio",
                    "",
                    "",
                    "https://nextfast.herokuapp.com"
                    ]
                }`}} />
    </Head>
    <Header />

    <main>
      <div className="container">{props.children}</div>
    </main>
    <Footer />
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
          <script src="/static/onesignal.js"></script>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      .bg-dark {
        background-color: #2196f3!important
    }
    .navbar-light .navbar-brand {
      color: white;
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
}
      body {
        background: #f0f2f5!important;
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        margin-top: 1%;
      }
    `}</style>
  </>
)

export default Layout
