import React from 'react'
import styled from 'styled-components'

import ContactSection from './contact-section'
import AccessibilitySection from './accessibility-section'

import { Section } from '../styled/global'

export const FooterSection = styled(Section)`
  background-color: ${({ color }) => color};

  &.md {
    padding: 2rem 0;
  }
  &.sm {
    padding: 1rem 0;
  }
`

const Footer = () => {
  return (
    <footer>
      <ContactSection />
      <AccessibilitySection />
    </footer>
  )
}

export default Footer
