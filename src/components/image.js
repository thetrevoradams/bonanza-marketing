import React from 'react' // eslint-disable-line no-unused-vars
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const imageStyling = css`
  z-index: -10;

  @media (max-width: 700px) {
    max-height: 400px;
  }
`

const Image = ({ imgName, styleOverride = '' }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile {
            edges {
              node {
                name
                childImageSharp {
                  id
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const images = data.allFile.edges
        const selected = images.find(img => img.node.name === imgName)
        return (
          <Img fluid={selected.node.childImageSharp.fluid} css={[imageStyling, styleOverride]} />
        )
      }}
    />
  )
}
export default Image
