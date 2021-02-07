import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

import ApprovalSection from './approval-section'
import { DevPageHeading } from './index'

import vars from '../../vars'

const ContentUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  a {
    margin: 0.25em;
    text-decoration: underline !important;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    flex-direction: row;
  }
`

const Content = ({
  contentUploads,
  contentApprovalSignature,
  contentApprovalDate,
  contentApprovalEmail,
  contentApprovalName,
  contentApprovalNotes,
}) => {
  return (
    <>
      <DevPageHeading>Content</DevPageHeading>
      <ContentUploadWrapper>
        {contentUploads &&
          contentUploads.length > 0 &&
          contentUploads.map((contentUpload, uploadIndex) => (
            <a
              key={`${contentUpload?.name}_${uploadIndex}`}
              href={contentUpload?.file?.localFile?.publicURL}
            >
              {contentUpload.name}
            </a>
          ))}
      </ContentUploadWrapper>
      <DevPageHeading small>Content Approval</DevPageHeading>
      <p>
        The Client approves this content and authorizes the Consultant to
        proceed with the development of wireframes. The Client acknowledges that
        content changes requested after the signature date below will result in
        additional fees that are not included in the original contract.
      </p>
      {contentApprovalNotes && (
        <>
          <DevPageHeading small>Additional Notes</DevPageHeading>
          {parse(contentApprovalNotes)}
        </>
      )}
      {contentApprovalSignature && (
        <ApprovalSection
          approvalName={contentApprovalName}
          approvalDate={contentApprovalDate}
          approvalEmail={contentApprovalEmail}
        />
      )}
    </>
  )
}

export default Content
