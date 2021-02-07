import React from 'react'
import styled from 'styled-components'

import { Section, Container, SoloHeading, Hr } from '../styled/global'

import Contacts from './contacts'
import SuccessFactors from './success-factors'
import Schedule from './schedule'
import Content from './content'
import Wireframes from './wireframes'
import Designs from './designs'

import vars from '../../vars'

export const DevPageHeading = styled(SoloHeading)`
  font-size: ${({ small }) =>
    small ? vars.fontSizeHeading1 : vars.fontSizeHeading2};
  color: ${vars.colorAlmostBlack};
`

const StyledContainer = styled(Container)`
  color: ${vars.colorAlmostBlack};

  a {
    color: ${vars.colorGreenSmallSubpage};
    font-weight: ${vars.fontWeightBold};
  }
`

const DevPagePost = ({
  acfPostFields: {
    devPageFields: {
      businessCardDetails,
      businessCards,
      companyName,
      contacts,
      contentUploads,
      contentApprovalSignature,
      contentApprovalDate,
      contentApprovalEmail,
      contentApprovalName,
      contentApprovalNotes,
      deadlines,
      designs,
      designApprovalDate,
      designApprovalEmail,
      designApprovalName,
      designApprovalNotes,
      designApprovalSignature,
      domain,
      domainAccess,
      logo,
      logoDetails,
      projectManager,
      wireframes,
      wireframeApprovalDate,
      wireframeApprovalEmail,
      wireframeApprovalNotes,
      wireframeApprovalName,
      wireframeApprovalSignature,
    },
  },
}) => {
  return (
    <Section bg="colorWhite">
      <StyledContainer>
        <SoloHeading color={vars.colorBlack}>{companyName}</SoloHeading>
        <p>
          <a
            href={`https://${domain}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {domain}
          </a>
        </p>
        <Contacts contacts={contacts} projectManager={projectManager} />
        <Hr />
        <SuccessFactors />
        <Hr />
        <Schedule deadlines={deadlines} />
        <Hr />
        <Content
          contentUploads={contentUploads}
          contentApprovalSignature={contentApprovalSignature}
          contentApprovalDate={contentApprovalDate}
          contentApprovalEmail={contentApprovalEmail}
          contentApprovalName={contentApprovalName}
          contentApprovalNotes={contentApprovalNotes}
        />
        <Hr />
        <Wireframes
          wireframes={wireframes}
          wireframeApprovalDate={wireframeApprovalDate}
          wireframeApprovalEmail={wireframeApprovalEmail}
          wireframeApprovalNotes={wireframeApprovalNotes}
          wireframeApprovalName={wireframeApprovalName}
          wireframeApprovalSignature={wireframeApprovalSignature}
        />
        <Hr />
        <Designs
          designs={designs}
          designApprovalDate={designApprovalDate}
          designApprovalEmail={designApprovalEmail}
          designApprovalName={designApprovalName}
          designApprovalNotes={designApprovalNotes}
          designApprovalSignature={designApprovalSignature}
        />
      </StyledContainer>
    </Section>
  )
}

export default DevPagePost
