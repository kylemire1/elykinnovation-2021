import React from 'react'

import { Container } from './styled/global'

const Footer = () => {
  return (
    <footer>
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </Container>
    </footer>
  )
}

export default Footer
