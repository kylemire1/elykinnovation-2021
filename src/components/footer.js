import React from 'react'

import { Container } from './styled/global'

const Footer = () => {
  return (
    <footer>
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a style={{ color: 'white' }} href="https://www.gatsbyjs.com">
          Gatsby
        </a>
        {` `}
        And{' '}
        <a style={{ color: 'white' }} href="https://wordpress.org/">
          WordPress
        </a>
      </Container>
    </footer>
  )
}

export default Footer
