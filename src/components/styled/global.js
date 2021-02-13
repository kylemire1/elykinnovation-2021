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
    padding: ${({ angled }) => (angled ? '7.5rem 0 3rem' : '3rem 0')};
  }
`

export const SectionHeading = styled.h2`
  font-size: ${vars.fontSizeHeading3};
  margin-bottom: 0.75em;
  color: ${({ bg }) =>
    bg === 'colorWhite' ? vars.colorBlack : vars.colorWhite};
  text-transform: capitalize;
  max-width: 54rem;
  font-weight: ${vars.fontWeightBolder};

  span {
    font-size: 1.125rem;
    font-weight: ${vars.fontWeightBold};
    display: block;
    color: ${({ bg }) =>
      bg === 'colorWhite' ? vars.colorGreen : vars.colorGreenSmall};
    text-transform: uppercase;
    margin-bottom: 0.3rem;
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
    margin-bottom: 0.3rem;
  }
`

export const SoloHeading = styled.h2`
  font-size: ${vars.fontSizeHeading4};
  font-weight: ${vars.fontWeightBolder};
  color: ${({ color }) => color};
  margin-bottom: 1rem;
`

export const FormControl = styled.div`
  display: block;
  height: 100%;
  margin-bottom: 1.5rem;

  label,
  input,
  textarea {
    display: block;
    width: 100%;
  }

  label {
    font-weight: ${vars.fontWeightBold};
    margin-bottom: 0.5rem;
  }

  input {
    height: 2.5rem;
    padding: 0.5em;
  }

  input,
  textarea,
  select {
    border: solid ${vars.pixel} ${vars.colorGreenSmall};
    border-radius: ${vars.borderRadiusSmall};
    font-size: ${vars.fontSizeText};
  }

  textarea {
    height: 10rem;
    padding: 0.5em;
  }
`
export const Hr = styled.hr`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const ErrorMessage = styled.div`
  padding: 1em;
  background-color: ${vars.colorRed};
  color: ${vars.colorWhite};
  border-radius: ${vars.borderRadiusSmall};
  margin: 1em 0;

  p {
    margin-bottom: 0;
  }

  a {
    color: currentColor;
    text-decoration: underline !important;
  }
`

export const SuccessMessage = styled(ErrorMessage)`
  background-color: ${vars.colorTransparent};
  border: solid ${vars.pixel} ${vars.colorGreenSmall};
`
