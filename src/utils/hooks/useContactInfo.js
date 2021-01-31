import { useEffect, useState } from 'react'
/**
 * Use to consume contact info data for the Contact Us page
 * @returns {object} { info }
 */
export default function useContactInfo(contactType, contactInfo) {
  const [info, setInfo] = useState(contactInfo)

  useEffect(() => {
    if (contactType === 'address' && contactInfo === info) {
      const { addressLine1, addressLine2, city, state, zipcode } = contactInfo

      const formattedInfo = `
          <span class="line__1">${addressLine1}</span>
          <span class="line__2">${addressLine2}</span>
          <span class="line__3">
            ${city}, ${state} ${zipcode}
          </span>
        `
      setInfo(formattedInfo)
    }
  }, [contactInfo, contactType, info])

  return { info }
}
