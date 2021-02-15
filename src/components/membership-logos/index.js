import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Membership from './membership'
import { Section, Container, SoloHeading } from '../styled/global'

import vars from '../../vars'

const StyledHeading = styled(SoloHeading)`
  text-align: center;
`

const MembershipGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;

  div + div {
    margin-top: 1.5rem;
  }

  @media (min-width: ${vars.breakpointSmall}) {
    flex-direction: row;
    div + div {
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }
`

const MembershipLogos = ({
  headingText,
  sectionBackgroundColor,
  memberships,
}) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <StyledHeading>{headingText}</StyledHeading>
        <MembershipGrid size={memberships?.length || 1}>
          {memberships &&
            memberships.length &&
            memberships.map((membership, membershipIndex) => (
              <Membership
                key={`membership_${membershipIndex}`}
                {...membership}
              />
            ))}
        </MembershipGrid>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment MembershipLogos on WpPage_Layoutsections_Components_MembershipLogos {
    fieldGroupName
    headingText
    sectionBackgroundColor
    memberships {
      fieldGroupName
      organizationLink
      organizationName
      organizationLogo {
        localFile {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    }
  }
`

export default MembershipLogos
