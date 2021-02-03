import React from 'react'
import styled from 'styled-components'

import Button from '../button'

import vars from '../../vars'

const PaginationButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${vars.breakpointLarge}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Pagination = ({ next, previous }) => {
  console.log({ next, previous })
  return (
    <PaginationButtons>
      <div>
        {previous && (
          <Button
            elementType="link"
            buttonStyle="outline"
            href={previous.uri}
            arrowDirection="left"
          >
            {previous.acfPostFields.launchAnnouncementFields.clientName ||
              'Previous Client'}
          </Button>
        )}
      </div>
      <div>
        {next && (
          <Button
            elementType="link"
            buttonStyle="outline"
            href={next.uri}
            arrowDirection="left"
          >
            {next.acfPostFields.launchAnnouncementFields.clientName ||
              'Next Client'}
          </Button>
        )}
      </div>
    </PaginationButtons>
  )
}

export default Pagination
