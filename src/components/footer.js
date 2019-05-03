import React from 'react' // eslint-disable-line no-unused-vars
// import { Link } from 'gatsby'
import Divider from '@material-ui/core/Divider'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const wrapper = css`
  width: 100%;
  padding: 50px;
`
const contentWrapper = css`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .contactInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .email {
      margin: 15px 0;
    }
  }

  @media (max-width: 965px) {
    flex-direction: column;
    justify-content: center;
    width: 500px;

    & > div:last-of-type {
      margin-top: 15px;
    }
  }
  @media (max-width: 560px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    * {
      font-size: 14px;
    }
  }
  @media (max-width: 360px) {
    .email {
      font-size: 12px;
    }
  }
`

const Footer = () => {
  return (
    <div css={wrapper}>
      <Divider />
      <div css={contentWrapper}>
        <div class="contactInfo" style={{ flex: 1, paddingRight: '15px' }}>
          <a href="tel:307-752-9979">307.752.9979</a>
          <a className="email" href="mailto:alexwelch@bonanzamarketingco.com">
            alexwelch@bonanzamarketingco.com
          </a>
          <div>
            PO Box 53
            <br />
            Sugar City, ID 83448-0053
          </div>
        </div>
        <div style={{ maxWidth: '500px' }}>
          Bonanza Marketing Company is a LLC, that offers the most up to date
          marketing techniques for 2019. We take pride in continuous study, to
          ensure that we stay ahead of the competition, so your business can
          become what you’ve always dreamt it to be.
        </div>
      </div>
    </div>
  )
}

export default Footer
