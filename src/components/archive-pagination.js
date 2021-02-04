import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { rgba } from 'polished'

import vars from '../vars'

const PaginationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin-top: 2rem;
`

const LinkWrapper = styled.div`
  min-width: 6rem;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0.5em;
  color: ${vars.colorGreenSmallSubpage};
  border: solid ${vars.pixel} ${vars.colorGreenSmallSubpage};
  border-radius: ${vars.borderRadiusSmall};
  background-color: ${rgba(vars.colorGreenSmallSubpage, 0)};
  transition: all 250ms ${vars.ease};

  :hover,
  :focus {
    color: ${vars.colorWhite};
    background-color: ${rgba(vars.colorGreenSmallSubpage, 1)};
    transition: all 250ms ${vars.ease};
  }
`

const PageNumberList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  padding: 0;

  li {
    padding: 0;
    margin: 0.25em;
    background-image: none !important;

    &.current {
      border-bottom: solid ${vars.pixel} ${vars.colorGreenSmallSubpage};
    }
  }

  a {
    color: ${vars.colorGreenSmallSubpage};
  }
`

const ArchivePagination = ({ next, previous, totalPages, currentPage }) => {
  const result = useStaticQuery(graphql`
    {
      wpPage(isPostsPage: { eq: true }) {
        uri
      }
    }
  `)
  const postsPageUri = result?.wpPage?.uri
  console.log({ postsPageUri })
  return (
    <PaginationRow>
      <LinkWrapper>
        {previous && (
          <StyledLink to={previous} aria-label="Previous Page">
            Previous
          </StyledLink>
        )}
      </LinkWrapper>
      <div>
        <PageNumberList>
          {/* Since we want to return an array of components,
              we can use this trick to make an array the length of our total pages
              and map over it.
          */}
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const currPageNumber = pageIndex + 1
            if (currPageNumber > totalPages) {
              return null
            }

            let linkHref = postsPageUri
            if (currPageNumber !== 1) {
              linkHref = `${linkHref}page/${currPageNumber}`
            }
            return (
              <li
                key={`archive_pagination_index_${pageIndex}`}
                className={currPageNumber === currentPage ? 'current' : ''}
              >
                <Link to={linkHref} aria-label={`Go to page ${currPageNumber}`}>
                  {currPageNumber}
                </Link>
              </li>
            )
          })}
        </PageNumberList>
      </div>
      <LinkWrapper>
        {next && (
          <StyledLink to={next} aria-label="Previous Page">
            Next
          </StyledLink>
        )}
      </LinkWrapper>
    </PaginationRow>
  )
}

export default ArchivePagination
