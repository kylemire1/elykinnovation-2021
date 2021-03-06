import React from 'react'
import Image from 'gatsby-image'

const Membership = ({
  organizationLink,
  organizationName,
  organizationLogo,
}) => {
  const logoData = organizationLogo?.localFile?.childImageSharp?.fixed
  return (
    <div>
      <a href={organizationLink} target="_blank" rel="noopener noreferrer">
        <Image alt={organizationName} fixed={logoData} />
      </a>
    </div>
  )
}

export default Membership
