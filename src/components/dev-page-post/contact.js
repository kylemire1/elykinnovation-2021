import React from 'react'
import styled from 'styled-components'

import vars from '../../vars'

const StyledContact = styled.div`
  color: ${vars.colorAlmostBlack};
  font-weight: ${vars.fontWeightBold};
`

const Contact = ({ cellPhone, company, emailAddress, name, officePhone }) => {
  return (
    <StyledContact>
      <p>{company}</p>
      <p>
        {name}
        <br />
        {officePhone && (
          <>
            <a href={`tel:+1${officePhone}`}>{officePhone}</a>
            <br />
          </>
        )}

        {cellPhone && (
          <>
            <a href={`tel:+1${cellPhone}`}>{cellPhone}</a>
            <br />
          </>
        )}

        {emailAddress && (
          <>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            <br />
          </>
        )}
      </p>
    </StyledContact>
  )
}

export default Contact
