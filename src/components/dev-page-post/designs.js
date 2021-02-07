import React from 'react'
import parse from 'html-react-parser'

import DevPageRound from './dev-page-round'
import ApprovalSection from './approval-section'
import { DevPageHeading } from './index'

const Designs = ({
  designs,
  designApprovalDate,
  designApprovalEmail,
  designApprovalName,
  designApprovalNotes,
  designApprovalSignature,
}) => {
  return (
    <>
      <DevPageHeading>Designs</DevPageHeading>
      {designs.length > 0 &&
        designs.map((design, designIndex) => (
          <DevPageRound
            key={`design_${design.title}_${designIndex}`}
            approved={design.approved}
            imageLinkOrPdf={design.imageLinkOrPdf}
            link={design.link}
            newRound={design.newDesignRound}
            image={design.image}
            pdf={design.pdf}
            roundTitle={design.roundTitle}
            title={design.title}
          />
        ))}
      <DevPageHeading small>Design Approval</DevPageHeading>
      <p>
        The Client approves the design(s) above with the green check mark(s) and
        authorizes the Consultant to proceed with the development of the
        website. The Client acknowledges that design changes requested after the
        signature date below will result in additional fees that are not
        included in the original contract.
      </p>
      {designApprovalNotes && (
        <>
          <DevPageHeading small>Additional Notes</DevPageHeading>
          {parse(designApprovalNotes)}
        </>
      )}
      {designApprovalSignature && (
        <ApprovalSection
          approvalName={designApprovalName}
          approvalDate={designApprovalDate}
          approvalEmail={designApprovalEmail}
        />
      )}
    </>
  )
}

export default Designs
