import React from 'react'
import styled from 'styled-components'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import vars from '../../vars'

const GalleryItem = ({ localFile, altText, thumbIdx, handleItemClicked }) => {
  return (
    <ItemButton className="item" onClick={() => handleItemClicked(thumbIdx)}>
      <GatsbyImage image={getImage(localFile)} alt={altText} />
    </ItemButton>
  )
}

const ItemButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms ${vars.ease};

  :hover {
    transform: scale(1.025);
    transition: transform 250ms ${vars.ease};
  }
`

export default GalleryItem
