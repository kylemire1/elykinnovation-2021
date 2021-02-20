/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import defaultImageSrc from '../../content/assets/default-social-media-image.jpg'

const SEO = ({
  description,
  lang,
  meta,
  title,
  twitterDescription,
  twitterTitle,
  facebookDescription,
  facebookTitle,
}) => {
  const { wp } = useStaticQuery(
    graphql`
      query {
        wp {
          seo {
            contentTypes {
              page {
                metaDesc
                title
              }
            }
          }
        }
      }
    `
  )

  // Use default description and title for pages if one isn't provided.
  const metaDescription = description || wp?.seo?.contentTypes?.page?.metaDesc
  const seoTitle = title || wp?.seo?.contentTypes?.page?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: facebookTitle || seoTitle,
        },
        {
          property: `og:description`,
          content: facebookDescription || metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'https://twitter.com/elykinnovation?lang=en',
        },
        {
          name: `twitter:title`,
          content: twitterTitle || seoTitle,
        },
        {
          name: `twitter:description`,
          content: twitterDescription || metaDescription,
        },
        {
          name: `twitter:image`,
          content: defaultImageSrc,
        },
      ].concat(meta)}
    />
  )
}

// This sets default props for a component in case one isn't passed in.
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
}

// This is an optional setting that lets you define what data types each prop has to be.
// You can also set whether or not a prop is required.
// It will only provide a warning in the console if you break one of the rules though.
// It's not a full type checking system.
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
