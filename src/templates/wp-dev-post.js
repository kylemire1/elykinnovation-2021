import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import DevPagePost from '../components/dev-page-post'

const BlogPostTemplate = ({ data: { post } }) => {
  return <Layout>{post && <DevPagePost {...post} />}</Layout>
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query DevPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      title
      acfPostFields {
        devPageFields {
          businessCardDetails
          businessCards
          companyName
          contentApprovalSignature
          contentApprovalDate
          contentApprovalEmail
          contentApprovalName
          contentApprovalNotes
          designApprovalDate
          designApprovalEmail
          designApprovalName
          designApprovalNotes
          designApprovalSignature
          domain
          domainAccess
          logo
          logoDetails
          projectManager
          wireframeApprovalDate
          wireframeApprovalEmail
          wireframeApprovalNotes
          wireframeApprovalName
          wireframeApprovalSignature
          contacts {
            cellPhone
            company
            emailAddress
            fieldGroupName
            name
            officePhone
          }
          contentUploads {
            fieldGroupName
            name
            file {
              localFile {
                publicURL
              }
            }
          }
          deadlines {
            date
            deadlineDescription
            deadlineStatus
            fieldGroupName
            title
          }
          wireframes {
            approved
            fieldGroupName
            imageLinkOrPdf
            link
            newWireframeRound
            image {
              altText
              localFile {
                publicURL
                childImageSharp {
                  fixed(width: 250) {
                    ...GatsbyImageSharpFixed_noBase64
                  }
                }
              }
            }
            pdf {
              localFile {
                publicURL
              }
            }
            roundTitle
            title
          }
          designs {
            approved
            imageLinkOrPdf
            link
            newDesignRound
            roundTitle
            title
            image {
              altText
              localFile {
                publicURL
                childImageSharp {
                  fixed(width: 250) {
                    ...GatsbyImageSharpFixed_noBase64
                  }
                }
              }
            }
            pdf {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`
