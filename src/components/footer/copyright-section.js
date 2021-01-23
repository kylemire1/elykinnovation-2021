import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SocialIcon from '../icons/social-icon'
import { FooterSection } from './index'
import { Container } from '../styled/global'

import vars from '../../vars'

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  > div + div {
    margin-top: 1rem;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    > div + div {
      margin-top: 0;
    }

    flex-direction: row;
    justify-content: space-between;
  }
`

const Copyright = styled.div`
  p {
    font-size: ${vars.fontSizeTextSmall};
    margin-bottom: 0;
  }
`
const Links = styled.div`
  width: 100%;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: currentColor;
    font-size: ${vars.fontSizeTextSmall};
    transition: color 250ms ${vars.ease};
    text-decoration: none;

    :hover,
    :focus,
    :focus-within {
      color: ${vars.colorGreenSmall};
      transition: color 250ms ${vars.ease};
    }
  }

  @media (min-width: ${vars.breakpointLarge}) {
    width: auto;
    justify-content: space-between;

    li + li {
      margin-left: 1rem;
    }
  }
`
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div,
  svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: ${vars.colorWhite};
    transition: fill 250ms ${vars.ease};

    :hover,
    :focus,
    :focus-within {
      fill: ${vars.colorGreen};
      transition: fill 250ms ${vars.ease};
    }
  }

  div + div {
    margin-left: 1rem;
  }
`

const CopyrightSection = () => {
  return (
    <FooterSection className="sm" color={vars.colorBlack}>
      <Container>
        <FooterRow>
          <Copyright>
            <p>
              Copyright © 2020 Elyk Innovation, Inc. – Jacksonville, Florida
            </p>
          </Copyright>
          <Links>
            <ul>
              <li>
                <Link to="/client-resources">Client Resources</Link>
              </li>
              <li>
                <Link to="/site-map">Site Map</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
            </ul>
          </Links>
          <Socials>
            <SocialIcon icon="facebook" />
            <SocialIcon icon="linkedin" />
            <SocialIcon icon="twitter" />
          </Socials>
        </FooterRow>
      </Container>
    </FooterSection>
  )
}

export default CopyrightSection
