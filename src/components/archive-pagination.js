import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight'
import { AiFillCaretLeft } from '@react-icons/all-files/ai/AiFillCaretLeft'

import Button from '../components/button'

import vars from '../vars'

const PaginationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;

  svg {
    width: 100%;
    height: 100%;
  }
`

const PageNumberList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  li {
    padding: 0;
    margin: 0.25em;
    background-image: none !important;
  }
`

const ArchivePagination = ({ next, previous, totalPages }) => {
  return (
    <PaginationRow>
      <div>
        {previous && (
          <StyledLink to={previous}>
            <AiFillCaretLeft />
          </StyledLink>
        )}
      </div>
      <div>
        <PageNumberList>
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const currPage = pageIndex + 1
            if (currPage <= totalPages) {
              return (
                <li key={`archive_pagination_index_${pageIndex}`}>
                  <Link to="#">{currPage}</Link>
                </li>
              )
            }
          })}
        </PageNumberList>
      </div>
      <div>
        {next && (
          <StyledLink to={next}>
            <AiFillCaretRight />
          </StyledLink>
        )}
      </div>
    </PaginationRow>
  )
}

export default ArchivePagination
