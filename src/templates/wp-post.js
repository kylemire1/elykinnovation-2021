import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import stripHtml from '../utils/stripHtml'
import LaunchAnnouncementPost from '../components/launch-announcement-post'
import DevPagePost from '../components/dev-page-post'

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    if (post && !postData) {
      setPostData({
        postType: post?.acfPostFields?.postType,
        postTitle: post?.title,
        postDescription: stripHtml(
          post?.acfPostFields?.launchAnnouncementFields?.clientBlurb
        ).replaceAll('\n', ''),
      })
    }
  }, [post, postData])

  return (
    <Layout>
      <SEO
        title={postData?.postTitle}
        description={postData?.postDescription}
      />
      {post && postData?.postType === 'launch-announcement' ? (
        <LaunchAnnouncementPost {...post} next={next} previous={previous} />
      ) : (
        <DevPagePost {...post} />
      )}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      title
      acfPostFields {
        postType
        launchAnnouncementFields {
          clientBlurb
          clientName
          fieldGroupName
          followUpServices
          projectSummary
          servicesIncluded
          fullHomePageScreenshot {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          mockupImage {
            altText
            localFile {
              childImageSharp {
                desktop: fixed(width: 572) {
                  ...GatsbyImageSharpFixed_noBase64
                }
                mobile: fixed(width: 350) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
        devPageFields {
          projectName
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      acfPostFields {
        launchAnnouncementFields {
          clientName
        }
      }
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      acfPostFields {
        launchAnnouncementFields {
          clientName
        }
      }
    }
  }
`
