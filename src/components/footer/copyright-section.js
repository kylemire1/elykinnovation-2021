import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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

  @media (min-width: ${vars.breakpointLarge}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Copyright = styled.div`
  order: 3;
  margin-top: 1rem;

  p {
    font-size: ${vars.fontSizeTextSmall};
    margin-bottom: 0;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    order: 1;
    margin-top: 0;
  }
`
const Links = styled.div`
  width: 100%;
  max-width: 25rem;
  order: 2;
  margin-top: 1rem;

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
    margin-top: 0;

    li + li {
      margin-left: 1rem;
    }
  }
`
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  order: 1;

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
  const data = useStaticQuery(graphql`
    query CopyrightFooterData {
      wpSiteFooter(id: { eq: "cG9zdDozMTA=" }) {
        id
        footerFields {
          copyrightLinks {
            linkHref
            linkText
          }
          socialLinks
        }
      }
    }
  `)

  const { copyrightLinks, socialLinks } = data?.wpSiteFooter?.footerFields

  return (
    <FooterSection className="sm" color={vars.colorBlack}>
      <Container>
        <FooterRow>
          <Copyright>
            <p>
              Copyright &copy; {new Date().getFullYear()} Elyk Innovation, Inc.
              &ndash; Jacksonville, Florida
            </p>
          </Copyright>
          <Links>
            <ul>
              {copyrightLinks &&
                copyrightLinks.map(({ linkText, linkHref }, linkIndex) => (
                  <li key={`${linkText}_link_${linkIndex}`}>
                    <Link to={linkHref}>{linkText}</Link>
                  </li>
                ))}
            </ul>
          </Links>
          <Socials>
            {socialLinks &&
              socialLinks.map((socialLink, socialLinkIndex) => (
                <SocialIcon
                  key={`${socialLink}_link_${socialLinkIndex}`}
                  icon={socialLink}
                />
              ))}
          </Socials>
        </FooterRow>
      </Container>
    </FooterSection>
  )
}

export default CopyrightSection
