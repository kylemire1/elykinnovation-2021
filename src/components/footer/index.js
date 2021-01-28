import React from 'react'
import styled from 'styled-components'

import ContactSection from './contact-section'
import AccessibilitySection from './accessibility-section'
import CopyrightSection from './copyright-section'
import { Section } from '../styled/global'

import vars from '../../vars'

export const FooterSection = styled(Section)`
  background-color: ${({ color }) => color};
  color: ${vars.colorWhite};
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
      <CopyrightSection />
    </footer>
  )
}

export default Footer
