import styled from 'styled-components'

import vars from '../../vars'
import portfolioBgSrc from '../../../content/assets/portfolio-bg-pattern.svg'

export const MainContent = styled.main`
  margin-top: ${props => (props.home ? 0 : '5rem')};
  padding-bottom: 3rem;
`

export const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Section = styled.section`
  background-color: ${props => vars[props.bg]};
  padding: ${props => (props.angled ? '7em 0 2em' : '2rem 0')};
  clip-path: ${props =>
    props.angled
      ? 'polygon(0% 0%, 50% 3%, 100% 0%, 100% 100%, 0% 100%)'
      : 'none'};

  @media (min-width: ${vars.breakpointLarge}) {
    background-image: ${props =>
      props.graphic ? `url(${portfolioBgSrc})` : 'none'};
    background-repeat: no-repeat;
    background-position: top -1px center;
    clip-path: ${props =>
      props.angled
        ? 'polygon(0% 0%, 50% 10%, 100% 0%, 100% 100%, 0% 100%)'
        : 'none'};
    padding: ${props => (props.angled ? '9rem 0 3rem' : '3rem 0')};
  }
`

export const SectionHeading = styled.h2`
  font-size: ${vars.fontSizeHeading3};
  margin-bottom: 0.75em;
  color: ${props =>
    props.bg === 'colorWhite' ? vars.colorBlack : vars.colorWhite};

  span {
    font-size: 1.125rem;
    display: block;
    color: ${props =>
      props.bg === 'colorWhite' ? vars.colorGreen : vars.colorGreenSmall};
    text-transform: uppercase;
  }
`
