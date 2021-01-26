import styled from 'styled-components'

import vars from '../../vars'
import portfolioBgSrc from '../../../content/assets/portfolio-bg-pattern.svg'

export const MainContent = styled.main`
  margin-top: ${({ home }) => (home ? 0 : '5rem')};
`

export const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Section = styled.section`
  background-color: ${({ bg }) => vars[bg]};
  padding: ${({ angled }) => (angled ? '7em 0 2em' : '2rem 0')};
  clip-path: ${({ angled }) =>
    angled ? 'polygon(0% 0%, 50% 3%, 100% 0%, 100% 100%, 0% 100%)' : 'none'};

  @media (min-width: ${vars.breakpointLarge}) {
    background-image: ${({ graphic }) =>
      graphic ? `url(${portfolioBgSrc})` : 'none'};
    background-repeat: no-repeat;
    background-position: top -${vars.pixel} center;
    clip-path: ${({ angled }) =>
      angled ? 'polygon(0% 0%, 50% 10%, 100% 0%, 100% 100%, 0% 100%)' : 'none'};
    padding: ${({ angled }) => (angled ? '9rem 0 3rem' : '3rem 0')};
  }
`

export const SectionHeading = styled.h2`
  font-size: ${vars.fontSizeHeading3};
  margin-bottom: 0.75em;
  color: ${({ bg }) =>
    bg === 'colorWhite' ? vars.colorBlack : vars.colorWhite};
  text-transform: capitalize;

  span {
    font-size: 1.125rem;
    display: block;
    color: ${({ bg }) =>
      bg === 'colorWhite' ? vars.colorGreen : vars.colorGreenSmall};
    text-transform: uppercase;
  }
`
export const HeroHeading = styled.h1`
  font-size: ${vars.fontSizeHeading7};
  font-weight: ${vars.fontWeightBolder};
  margin-bottom: 1.25rem;
  color: ${({ bg }) =>
    bg === 'colorWhite' ? vars.colorBlack : vars.colorWhite};
  text-transform: capitalize;

  span {
    font-size: 1.125rem;
    display: block;
    color: ${({ bg }) =>
      bg === 'colorWhite' ? vars.colorGreen : vars.colorGreenSmall};
    text-transform: uppercase;
    font-weight: ${vars.fontWeightBold};
  }
`
