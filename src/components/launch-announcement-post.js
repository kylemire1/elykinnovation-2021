import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import { darken } from 'polished'

import SubpageHeroSmall from './subpage-hero-small'
import { Section, Container, SoloHeading } from './styled/global'
import Motto from './motto'

import vars from '../vars'
import Pagination from './pagination'

const PostGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const HomePageImageWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  .gatsby-image-wrapper {
    border-radius: ${vars.borderRadiusSmall};
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ServicesWrapper = styled.div`
  order: 1;
  color: ${vars.colorAlmostBlack};
  display: grid;

  @media (max-width: ${vars.breakpointLarge}) {
    margin-bottom: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(23.3rem, 1fr));
    border: solid ${vars.pixel} ${vars.colorGreenSmall};
    border-radius: ${vars.borderRadiusLarge};
    padding: 2em;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    order: 2;
  }
`

const IncludedServices = styled.div`
  margin-bottom: 1.5rem;
`

const FollowUpServices = styled.div``

const MockupWrapper = styled.div`
  order: 2;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    order: 1;
  }
`

const PaginationWrapper = styled.section`
  background-color: ${vars.colorGreen};
  padding: 1rem 0;
`

const ClientBlurb = styled.div`
  p {
    font-size: ${vars.fontSizeHeading1};
    font-weight: ${vars.fontWeightBolder};
    line-height: 1.5;
  }

  a {
    color: ${darken(0, vars.colorWhite)};
    transition: color 250ms ${vars.ease};
    text-decoration: underline !important;

    :hover,
    :focus {
      color: ${darken(0.095, vars.colorWhite)};
      transition: color 250ms ${vars.ease};
    }
  }
`

const LaunchAnnouncementPost = ({
  title,
  next,
  previous,
  acfPostFields: {
    launchAnnouncementFields: {
      clientBlurb,
      clientName,
      followUpServices,
      projectSummary,
      servicesIncluded,
      fullHomePageScreenshot,
      mockupImage,
    },
  },
}) => {
  const homePageImageData = {
    fluid: fullHomePageScreenshot?.localFile?.childImageSharp?.fluid,
    altText: fullHomePageScreenshot?.altText,
  }
  const mockupImageData = {
    desktop: mockupImage?.localFile?.childImageSharp?.desktop,
    mobile: mockupImage?.localFile?.childImageSharp?.mobile,
    altText: mockupImage?.altText,
  }

  return (
    <article>
      <SubpageHeroSmall headingText={clientName} />
      <Section bg="colorBlack">
        <Container>
          <Motto
            mainHeadingText={title}
            smallGreenHeadingText="The Project"
            paragraphContent={projectSummary}
          />
        </Container>
      </Section>
      <PaginationWrapper>
        <Container>
          <Pagination next={next} previous={previous} />
        </Container>
      </PaginationWrapper>
      <Section bg="colorWhite">
        <Container>
          <PostGrid>
            <HomePageImageWrapper>
              {fullHomePageScreenshot && (
                <Image
                  backgroundColor="transparent"
                  fluid={homePageImageData.fluid}
                  alt={homePageImageData.altText}
                />
              )}
            </HomePageImageWrapper>
            <DetailsWrapper>
              <ServicesWrapper>
                <IncludedServices>
                  {servicesIncluded && (
                    <>
                      <SoloHeading color={vars.colorGreen}>
                        Included Services
                      </SoloHeading>
                      <div className="check">{parse(servicesIncluded)}</div>
                    </>
                  )}
                </IncludedServices>
                <FollowUpServices>
                  {followUpServices && (
                    <>
                      <SoloHeading color={vars.colorGreen}>
                        Follow-Up Services
                      </SoloHeading>
                      <div className="check">{parse(followUpServices)}</div>
                    </>
                  )}
                </FollowUpServices>
              </ServicesWrapper>
              <MockupWrapper>
                {mockupImageData && (
                  <Image
                    backgroundColor="transparent"
                    fixed={[
                      mockupImageData.mobile,
                      {
                        ...mockupImageData.desktop,
                        media: `(min-width: ${vars.breakpointMedium})`,
                      },
                    ]}
                    alt={mockupImageData.altText}
                  />
                )}
              </MockupWrapper>
            </DetailsWrapper>
          </PostGrid>
        </Container>
      </Section>
      <Section bg="colorGreen">
        <Container>
          <ClientBlurb>{clientBlurb && parse(clientBlurb)}</ClientBlurb>
          <Pagination next={next} previous={previous} />
        </Container>
      </Section>
    </article>
  )
}

export default LaunchAnnouncementPost
