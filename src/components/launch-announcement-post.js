import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import { darken } from 'polished'

import SubpageHeroSmall from './subpage-hero-small'
import Motto from './motto'
import PostPagination from './post-pagination'
import { Section, Container, SoloHeading } from './styled/global'

import vars from '../vars'
import ballLogoSrc from '../../content/assets/ball-logo.svg'

const PostGrid = styled.div`
  display: block;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const HomePageImageWrapper = styled.div`
  margin-bottom: 1.5rem;

  .gatsby-image-wrapper {
    border-radius: ${vars.borderRadiusSmall};
  }

  @media (min-width: ${vars.breakpointLarge}) {
    margin-bottom: 0;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
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
  color: ${vars.colorWhite};
  padding: 1rem 0;
`

const ClientBlurb = styled.div`
  p {
    font-size: ${vars.fontSizeHeading1};
    font-weight: ${vars.fontWeightBolder};
    line-height: 1.5;
    color: ${vars.colorWhite};
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

const StyledContainer = styled(Container)`
  @media (min-width: ${vars.breakpointLarge}) {
    position: relative;
    z-index: 0;

    ::after {
      content: '';
      position: absolute;
      z-index: -1;
      opacity: 0.15;
      bottom: -2%;
      right: -15%;
      width: 46.875rem;
      height: 46.875rem;
      background-image: url(${ballLogoSrc});
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
`

const StyledSection = styled(Section)`
  color: ${vars.colorWhite};
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
            sectionBackgroundColor="colorBlack"
            launchPost
          />
        </Container>
      </Section>
      <PaginationWrapper>
        <Container>
          <PostPagination next={next} previous={previous} />
        </Container>
      </PaginationWrapper>
      <Section bg="colorWhite">
        <StyledContainer>
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
                {mockupImage && (
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
        </StyledContainer>
      </Section>
      <StyledSection bg="colorGreen">
        <Container>
          <ClientBlurb>{clientBlurb && parse(clientBlurb)}</ClientBlurb>
          <PostPagination next={next} previous={previous} />
        </Container>
      </StyledSection>
    </article>
  )
}

export default LaunchAnnouncementPost
