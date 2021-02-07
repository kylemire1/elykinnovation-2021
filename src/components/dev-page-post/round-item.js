import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import vars from '../../vars'
import checkSrc from '../../../content/assets/check-bullet.svg'

const RoundImageWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  border-radius: ${vars.borderRadiusSmall};
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
`

const RoundImageInner = styled.div`
  display: flex;
  flex-direction: column;

  &.approved {
    a {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5rem;
        height: 5rem;
        background-image: url(${checkSrc});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 10;
        pointer-events: none;
      }
    }
  }

  a {
    height: 250px;
    overflow: hidden;
    box-shadow: 0 0.188rem 1.875rem rgba(0, 0, 0, 0.18);
    transition: box-shadow 250ms ${vars.ease};
    vertical-align: top;
    margin-bottom: 1rem;

    :hover,
    :focus {
      box-shadow: 0 0.188rem 1.875rem rgba(0, 0, 0, 0);
      transition: box-shadow 250ms ${vars.ease};
    }
  }

  p {
    margin: 0;
    font-weight: ${vars.fontWeightBold};
  }
`

const RoundItem = ({ approved, imageLinkOrPdf, link, image, pdf, title }) => {
  const result = useStaticQuery(graphql`
    query StaticImageData {
      pdf: file(name: { eq: "links-to-file" }) {
        childImageSharp {
          fixed(width: 250, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      link: file(name: { eq: "links-to-web-page" }) {
        childImageSharp {
          fixed(width: 250, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  const imageData =
    result && parseImageQueryResult(result, imageLinkOrPdf, image, link, pdf)

  return (
    <RoundImageWrapper>
      <RoundImageInner className={approved ? 'approved' : ''}>
        <a href={imageData.full} target="_blank" rel="noopener noreferrer">
          <Image fixed={imageData.thumb} alt="" />
        </a>
        <p>{title}</p>
      </RoundImageInner>
    </RoundImageWrapper>
  )
}

function parseImageQueryResult(queryResult, imageLinkOrPdf, image, link, pdf) {
  const pdfImage = queryResult.pdf.childImageSharp.fixed
  const linkImage = queryResult.link.childImageSharp.fixed

  let imageData
  switch (imageLinkOrPdf) {
    case 'link':
      imageData = {
        thumb: linkImage,
        full: link,
      }
      break
    case 'pdf':
      imageData = {
        thumb: pdfImage,
        full: pdf.publicURL,
      }
      break
    case 'image':
      imageData = {
        thumb: image.childImageSharp.fixed,
        full: image.publicURL,
      }
      break
    default:
      imageData = {
        thumb: linkImage,
        full: link,
      }
      break
  }

  return imageData
}

export default RoundItem
