import React from 'react' // eslint-disable-line no-unused-vars
import Svg from './svg'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const wrapper = css`
  display: flex;
  flex-direction: row;

  & > div:last-of-type {
    margin-left: 20px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
  }
`

const ServiceOffering = ({ offering: { title, icon, desc } }) => (
  <div css={wrapper}>
    <div>
      {console.log('icon', icon)}
      <Svg icon={icon} />
    </div>
    <div>
      <h4 className="orangeColor">{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
)

export default ServiceOffering
