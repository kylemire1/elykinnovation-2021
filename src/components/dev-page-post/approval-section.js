import React from 'react'
import styled from 'styled-components'

import vars from '../../vars'

const StyledApproval = styled.div`
  padding: 1em;
  background-color: ${vars.colorGreenSmall};
  border-radius: ${vars.borderRadiusSmall};

  p {
    margin: 0;
    color: ${vars.colorWhite};
  }
`

const ApprovalSection = ({ approvalName, approvalEmail, approvalDate }) => {
  return (
    <StyledApproval>
      <p>
        This approval was electronically signed by {approvalName} (
        {approvalEmail}) on {approvalDate}{' '}
      </p>
    </StyledApproval>
  )
}

export default ApprovalSection
