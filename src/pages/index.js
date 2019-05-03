import React from 'react' // eslint-disable-line no-unused-vars
import Image from '../components/image'
import Divider from '@material-ui/core/Divider'
// import { jsx, css } from '@emotion/core'
import Services from '../services/serviceOfferings'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'
import ServiceOffering from '../components/serviceOffering'

const IndexPage = () => (
  <>
    <SEO
      title="Bonanza Marketing"
      keywords={[`marketing`, `seo`, `branding`]}
    />
    <Layout>
      <main style={{ margin: '0 auto' }} className="textContainer">
        <h1>
          Creative and Effective Marketing Techniques, to maximize your profits.
        </h1>
        <p>
          At Bonanza Marketing Company, we take pride in our knowledge, and
          expertise in the ways of modern marketing. More importantly, we
          believe our strategies of acquiring business for our patrons will meet
          all of your needs and then some.
        </p>
        <p>
          With our 100% satisfaction guarantee or your money back* what do you
          have to lose?! We are positive we can find a way to increase your
          marketing efforts, as well as taking that burden out of your hands. So
          you can sit back, and enjoy the Bonanza business you’ve been
          expecting.
        </p>
        <small>
          <em>*Refund only applicable toward the first month of service.</em>
        </small>
        <div className="spacer" />
        <Divider variant="middle" />
        <div className="spacer" />
        <Image imgName="marketingquote" />
        <div className="spacer" />
        <Divider variant="middle" />
        <div className="spacer" />
        <h1>Services Offered</h1>
        <div className="spacer" />
        <div>
          {Services.map((offering, index) => (
            <ServiceOffering offering={offering} key={`service${index}`} />
          ))}
        </div>
        <div className="spacer" />
        <Divider variant="middle" />
        <div className="spacer" />
        <Image imgName="emailmarketingquote" />
        <Divider variant="middle" />
        <div className="spacer" />
        <Divider variant="middle" />
        <div className="spacer" />
        <h1>Let's Chat</h1>
        <p>
          Are you stuck with traditional marketing tactics, or struggling to
          find new clients? Maybe your business is doing well, but you’d like to
          see it become great? We’re here for every circumstance, and will do
          everything in our power to help your business grow.
        </p>
        <p>
          Even if you’re still not certain you’d like our assistance, we’ll
          conduct a
          <b>
            <em> FREE AUDIT </em>
          </b>
          of your current marketing, web pages, social media, etc., and give you
          our feed back of what you’re doing well, as well as areas of
          improvement.
        </p>
        <p>
          Please fill out the information below, so we can answer your
          questions, and set up a time to visit.
        </p>
        <ContactForm />
      </main>
    </Layout>
  </>
)

export default IndexPage
