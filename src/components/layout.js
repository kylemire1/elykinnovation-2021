import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'

import { Container } from './styled/global'
import NavItem from './nav-item'

import vars from '../vars'
import logoSrc from '../../content/assets/logo-final.png'

const Header = styled.header`
  background-color: ${vars.colorBlack};
  color: ${vars.colorWhite};
  height: 5.762em;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.48);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const NavWrapper = styled.div`
  display: flex;
`

const FlexNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const PrimaryNav = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li + li {
      margin-left: 1.4em;
    }
  }
`

const SecondaryNav = styled.div`
  width: 100%;
  max-width: 55%;
  margin-left: auto;
  font-size: 0.85rem;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const LogoWrapper = styled.div`
  background-color: ${vars.colorRed};
  display: flex;
  align-items: center;
  width: 27%;
  position: relative;

  img {
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 999%;
    z-index: 0;
    height: 100%;
    background-color: ${vars.colorRed};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5.762em 5.762em 0;
    right: 0;
    border-color: transparent ${vars.colorBlack} transparent transparent;
  }
`

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div>
      <Header>
        <Container>
          <NavWrapper>
            <LogoWrapper>
              <img
                src={logoSrc}
                alt="Elyk Innovation Inc.: Internet Strategy by Design"
              />
            </LogoWrapper>
            <FlexNav role="navigation">
              <SecondaryNav>
                <ul>
                  <NavItem>About</NavItem>
                  <NavItem>Services</NavItem>
                  <NavItem>Portfolio</NavItem>
                  <NavItem>FAQ</NavItem>
                  <NavItem>Blog</NavItem>
                  <NavItem>Contact</NavItem>
                </ul>
              </SecondaryNav>
              <PrimaryNav>
                <ul>
                  <NavItem>Website Design</NavItem>
                  <NavItem>Web & App Development</NavItem>
                  <NavItem>Website Maintenance</NavItem>
                  <NavItem>Website Accessibility</NavItem>
                  <NavItem>Online Marketing</NavItem>
                </ul>
              </PrimaryNav>
            </FlexNav>
          </NavWrapper>
        </Container>
      </Header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
