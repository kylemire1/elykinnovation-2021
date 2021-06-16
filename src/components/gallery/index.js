import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Lightbox from 'react-image-lightbox'

import { Section, Container, SectionHeading } from '../styled/global'

import vars from '../../vars'
import GalleryItem from './gallery-item'

export const fragment = graphql`
  fragment Gallery on WpPage_Layoutsections_Components_Gallery {
    angledBackgroundTransition
    fieldGroupName
    sectionBackgroundColor
    sectionHeading
    images {
      galleryItem {
        altText
        localFile {
          publicURL
        }
      }
    }
    thumbs: images {
      galleryItem {
        databaseId
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, width: 1000)
          }
        }
      }
    }
  }
`

const Gallery = ({
  sectionBackgroundColor,
  angledBackgroundTransition,
  sectionHeading,
  thumbs,
  images,
}) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [currGalleryIndex, setCurrGalleryIndex] = useState(0)
  const lightboxData = images.reduce(
    (accumulator, current) => [
      ...accumulator,
      {
        src: current.galleryItem.localFile.publicURL,
        alt: current.galleryItem.altText,
      },
    ],
    []
  )

  const handleItemClicked = idx => {
    setCurrGalleryIndex(idx)
    setShowLightbox(true)
  }

  return (
    <Section bg={sectionBackgroundColor} angled={angledBackgroundTransition}>
      <Container>
        <SectionHeading>{sectionHeading}</SectionHeading>
        <GalleryGrid>
          {thumbs.map((thumb, thumbIdx) => {
            const { galleryItem } = thumb
            return (
              <GalleryItem
                key={galleryItem.databaseId}
                {...galleryItem}
                handleItemClicked={handleItemClicked}
                thumbIdx={thumbIdx}
              />
            )
          })}
        </GalleryGrid>
        {showLightbox && (
          <Lightbox
            mainSrc={lightboxData[currGalleryIndex].src}
            nextSrc={
              lightboxData[(currGalleryIndex + 1) % lightboxData.length].src
            }
            prevSrc={
              lightboxData[
                (currGalleryIndex + lightboxData.length - 1) % images.length
              ].src
            }
            onCloseRequest={() => setShowLightbox(false)}
            onMovePrevRequest={() =>
              setCurrGalleryIndex(
                (currGalleryIndex + lightboxData.length - 1) %
                  lightboxData.length
              )
            }
            onMoveNextRequest={() =>
              setCurrGalleryIndex((currGalleryIndex + 1) % lightboxData.length)
            }
            imageCaption={lightboxData[currGalleryIndex].alt}
          />
        )}
      </Container>
    </Section>
  )
}

const GalleryGrid = styled.div`
  display: grid;
  justify-content: center;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  .item {
    .gatsby-image-wrapper {
      border-radius: ${vars.borderRadiusSmall};
    }
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-template-columns: repeat(auto-fit, 181px);

    .item {
      .gatsby-image-wrapper {
        max-height: 12.5rem;
        height: 100%;
      }
    }

    .item:nth-child(1),
    .item:nth-child(2),
    .item:nth-child(3),
    .item:nth-child(6),
    .item:nth-child(7),
    .item:nth-child(8),
    .item:nth-child(11),
    .item:nth-child(12),
    .item:nth-child(13) {
      grid-column: span 2;
    }

    .item:nth-child(4),
    .item:nth-child(5),
    .item:nth-child(9),
    .item:nth-child(10) {
      grid-column: span 3;
    }
  }
`

export default Gallery
