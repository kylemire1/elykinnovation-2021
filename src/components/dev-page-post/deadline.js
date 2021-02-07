import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

import vars from '../../vars'

const StyledDeadline = styled.div`
  display: block;
  margin: 1rem 0;
  padding: 0 1em;

  &.none {
    opacity: 0.5;
  }

  &.in-progress {
    padding: 1em;
    border: solid ${vars.pixel} ${vars.colorGreenSmallSubpage};
    border-radius: ${vars.borderRadiusSmall};

    p {
      margin: 0;
    }
  }

  &.approved {
    padding: 1em;
    color: ${vars.colorWhite};
    background-color: ${vars.colorGreenSmall};
    border-radius: ${vars.borderRadiusSmall};

    p {
      margin: 0;
    }
  }
`

const Status = styled.span`
  text-transform: capitalize;
`

const Description = styled.span`
  display: block;
  width: 100%;
  font-style: italic;
`

const Deadline = ({ date, deadlineDescription, deadlineStatus, title }) => {
  const [statusText, setStatusText] = useState(null)

  useEffect(() => {
    if (!statusText && deadlineStatus) {
      setStatusText(deadlineStatus.replaceAll('-', ' '))
    }
  }, [deadlineStatus, statusText])

  return (
    <StyledDeadline className={deadlineStatus}>
      {title} &ndash; ({date}) &ndash; <Status>{statusText}</Status>
      {deadlineDescription && (
        <Description>{parse(deadlineDescription)}</Description>
      )}
    </StyledDeadline>
  )
}

export default Deadline
