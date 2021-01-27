import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import useDimensions from 'react-use-dimensions'

import vars from '../vars'

const ImageWrapper = styled.div`
  position: relative;

  .gatsby-image-wrapper {
    border-radius: ${({ $rounded }) => ($rounded ? vars.borderRadiusLarge : 0)};
  }
`

const ImageBg = styled.div`
  display: none;
  position: absolute;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border: solid ${vars.pixel} ${vars.colorGreen};
  border-radius: ${vars.borderRadiusLarge};
  top: 0;
  left: 0;
  transform: translate(6%, 6%);
  z-index: -1;

  @media (min-width: ${vars.breakpointLarge}) {
    display: block;
  }
`

const ImageWithStroke = ({
  fixed,
  fluid,
  altText,
  backgroundColor,
  rounded,
  imageBorderEffect,
}) => {
  const [ref, { width, height }] = useDimensions()

  return (
    <ImageWrapper $rounded={rounded} ref={ref}>
      {fixed ? (
        <Image
          backgroundColor={imageBorderEffect ? backgroundColor : 'transparent'}
          fixed={fixed}
          alt={altText}
        />
      ) : (
        <Image
          backgroundColor={imageBorderEffect ? backgroundColor : 'transparent'}
          fluid={fluid}
          alt={altText}
        />
      )}
      {imageBorderEffect && (
        <ImageBg $width={width} $height={height} aria-hidden />
      )}
    </ImageWrapper>
  )
}

export default ImageWithStroke
