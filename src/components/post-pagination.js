import React from 'react'
import styled from 'styled-components'

import Button from './button'

import vars from '../vars'

const PaginationButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${vars.colorWhite};
  min-height: 3rem;

  > * + * {
    margin-top: 1rem;
    width: 100%;
  }

  a,
  .text-wrapper {
    width: 100%;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    flex-direction: row;
    justify-content: space-between;

    a,
    .text-wrapper {
      width: auto;
    }

    > * + * {
      margin-top: 0;
      width: auto;
    }
  }
`

const PostPagination = ({ next, previous }) => {
  const nextClientName =
    next?.acfPostFields?.launchAnnouncementFields?.clientName
  const previousClientName =
    previous?.acfPostFields?.launchAnnouncementFields?.clientName

  return (
    <PaginationButtons>
      <div>
        {next ? (
          <Button
            elementType="link"
            buttonStyle="outline"
            href={next.uri}
            arrowDirection="left"
          >
            {`Next Project${nextClientName ? `: ${nextClientName}` : ''}`}
          </Button>
        ) : (
          "You're all caught up!"
        )}
      </div>
      <div>
        {previous ? (
          <Button
            elementType="link"
            buttonStyle="outline"
            href={previous.uri}
            arrowDirection="right"
          >
            {`Previous Project${
              previousClientName ? `: ${previousClientName}` : ''
            }`}
          </Button>
        ) : (
          'Sorry, nothing left to show!'
        )}
      </div>
    </PaginationButtons>
  )
}

export default PostPagination
