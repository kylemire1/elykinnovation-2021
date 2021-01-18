import styled from 'styled-components'

import vars from '../../vars'

const MobileNavButton = styled.button`
  display: block;
  margin-left: auto;
  background: none;
  border: none;
  color: ${vars.colorWhite};
  font-size: 1rem;
  min-width: 3rem;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    display: none;
  }
`
export default MobileNavButton
