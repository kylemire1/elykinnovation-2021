import React from 'react'
import parse from 'html-react-parser'

import DevPageRound from './dev-page-round'
import ApprovalSection from './approval-section'
import { DevPageHeading } from './index'

const Wireframes = ({
  wireframes,
  wireframeApprovalDate,
  wireframeApprovalEmail,
  wireframeApprovalNotes,
  wireframeApprovalName,
  wireframeApprovalSignature,
}) => {
  return (
    <>
      <DevPageHeading>Wireframes</DevPageHeading>
      {wireframes.length > 0 &&
        wireframes.map((wireframe, wireframeIndex) => (
          <DevPageRound
            key={`wireframe_${wireframe.title}_${wireframeIndex}`}
            approved={wireframe.approved}
            imageLinkOrPdf={wireframe.imageLinkOrPdf}
            link={wireframe.link}
            newRound={wireframe.newWireframeRound}
            image={wireframe.image}
            pdf={wireframe.pdf}
            roundTitle={wireframe.roundTitle}
            title={wireframe.title}
          />
        ))}
      <DevPageHeading small>Wireframe Approval</DevPageHeading>
      <p>
        The Client approves the wireframe(s) above with the green check mark(s)
        and authorizes the Consultant to proceed with the development of
        designs. The Client acknowledges that wireframe changes requested after
        the signature date below will result in additional fees that are not
        included in the original contract.{' '}
      </p>
      {wireframeApprovalNotes && (
        <>
          <DevPageHeading small>Additional Notes</DevPageHeading>
          {parse(wireframeApprovalNotes)}
        </>
      )}
      {wireframeApprovalSignature && (
        <ApprovalSection
          approvalName={wireframeApprovalName}
          approvalDate={wireframeApprovalDate}
          approvalEmail={wireframeApprovalEmail}
        />
      )}
    </>
  )
}

export default Wireframes
