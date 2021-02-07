import React from 'react'

import RoundItem from './round-item'
import { DevPageHeading } from './index'

const DevPageRound = ({
  approved,
  imageLinkOrPdf,
  link,
  newRound,
  image,
  pdf,
  roundTitle,
  title,
}) => {
  if (newRound) {
    return <DevPageHeading small>{roundTitle}</DevPageHeading>
  } else {
    return (
      <RoundItem
        approved={approved}
        imageLinkOrPdf={imageLinkOrPdf}
        link={link}
        image={image?.localFile}
        pdf={pdf?.localFile}
        title={title}
      />
    )
  }
}

export default DevPageRound
