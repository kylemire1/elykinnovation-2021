import React from 'react'
import styled from 'styled-components'

import { DevPageHeading } from './index'

import clientGuideSrc from '../../../content/assets/ELYK-new-client-guide-rev-2013.pdf'

const StyledList = styled.ol`
  li + li {
    margin-top: 1em;
  }
`

const SuccessFactors = () => {
  return (
    <>
      <DevPageHeading>Success Factors</DevPageHeading>
      <p>
        Our experience indicates that when a project goes “exactly as planned”
        there are several key elements that were in place.
      </p>
      <StyledList>
        <li>
          We have one primary contact and that person remains in place from
          beginning to end.
        </li>
        <li>The primary contact has time to commit to the project.</li>
        <li>
          Everyone involved in the project reads our new client guide. &ndash;{' '}
          <a href={clientGuideSrc} target="_blank" rel="noopener noreferrer">
            Download New Client Guide
          </a>
        </li>
        <li>
          The content is developed, updated, formatted and delivered by a
          professional copywriter.
        </li>
        <li>Deadlines are realistic and adhered to.</li>
        <li>Communication is wide open.</li>
        <li>If we run into road blocks, everyone is focused on a solution.</li>
      </StyledList>
    </>
  )
}

export default SuccessFactors
