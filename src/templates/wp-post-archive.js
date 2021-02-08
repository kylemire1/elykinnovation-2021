import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostItem from '../components/post-item'
import SubpageHeroSmall from '../components/subpage-hero-small'
import { Section, Container } from '../components/styled/global'

import vars from '../vars'
import ArchivePagination from '../components/archive-pagination'

const PostGrid = styled.ol`
  list-style: none;
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const WpPostArchive = ({
  data,
  pageContext: { nextPagePath, previousPagePath, totalPages, currentPage },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <SEO
          title={data?.wpPage?.seo?.title}
          description={data?.wpPage?.seo?.metaDesc}
        />
        <Section>
          <Container>
            <p>
              No blog posts found. Add posts to your WordPress site and they'll
              appear here!
            </p>
          </Container>
        </Section>
      </Layout>
    )
  }
  return (
    <Layout>
      <SEO
        title={data?.wpPage?.seo?.title}
        description={data?.wpPage?.seo?.metaDesc}
      />
      <SubpageHeroSmall headingText="Launch Pad" />
      <Section bg="colorWhite">
        <Container>
          <PostGrid>
            {posts.map(post => {
              return <PostItem key={post.uri} {...post} />
            })}
          </PostGrid>

          {(nextPagePath || previousPagePath) && (
            <ArchivePagination
              totalPages={totalPages}
              next={nextPagePath}
              previous={previousPagePath}
              currentPage={currentPage}
            />
          )}
        </Container>
      </Section>
    </Layout>
  )
}

export default WpPostArchive

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      filter: { acfPostFields: { postType: { eq: "launch-announcement" } } }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        acfPostFields {
          launchAnnouncementFields {
            excerpt: projectSummary
          }
        }
        uri
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
    wpPage(isPostsPage: { eq: true }) {
      seo {
        title
        metaDesc
      }
    }
  }
`
