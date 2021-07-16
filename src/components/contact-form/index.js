import React from 'react'
import { Helmet } from 'react-helmet'
import { Form, Formik } from 'formik'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import { graphql } from 'gatsby'

import { Section, Container, ErrorMessage, SoloHeading } from '../styled/global'
import TextInputField, { TextAreaField } from './input-field'
import SelectField from './select-field'

import vars from '../../vars'
import { validate } from './validate'
import useAsyncSubmit from './useAsyncSubmit'

export const fragment = graphql`
  fragment ContactForm on WpPage_Layoutsections_Components_ContactForm {
    fieldGroupName
    submitButtonText
    sectionBackgroundColor
  }
`

const INITIAL_FORM_VALUES = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

const ContactForm = ({ sectionBackgroundColor, submitButtonText }) => {
  const recaptchaSiteKey = process.env.GATSBY_RECAPTCHA_V3_SITE_KEY
  const { handleSubmit, serverState, showForm } =
    useAsyncSubmit(recaptchaSiteKey)

  return (
    <Section bg={sectionBackgroundColor}>
      <Helmet>
        <script
          key="recaptcha"
          type="text/javascript"
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        />
      </Helmet>
      <Container>
        <Formik
          initialValues={INITIAL_FORM_VALUES}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ isSubmitting }) =>
            showForm ? (
              <StyledForm id="contact-form" name="contact">
                <TextInputField
                  isRequired
                  id="name-contact"
                  name="name"
                  label="name"
                  title="Name"
                  type="text"
                />
                <TextInputField
                  isRequired
                  id="email-contact"
                  name="email"
                  label="email"
                  title="Email"
                  type="email"
                />
                <TextInputField
                  id="phone-contact"
                  name="phone"
                  label="phone number"
                  title="Phone Number"
                  type="phone"
                />
                <SelectField
                  isRequired
                  type="select"
                  name="interest"
                  id="interest-contact"
                  choices={[
                    'ADA Compliance',
                    'Website Development',
                    'Website Rescue',
                    'Web Application',
                    'Content Management System',
                    'Search Engine Optimization',
                    'Pay-Per-Click Advertising',
                    'Email Marketing',
                    'Mobile App',
                    'Just Saying "Hey!"',
                    'Release the Kraken!',
                  ]}
                  label="Area of Interest"
                />
                <TextAreaField
                  isRequired
                  id="message-contact"
                  name="message"
                  label="message"
                  title="Message"
                  type="text"
                  rows="8"
                />
                <div>
                  {!serverState.ok && (
                    <ErrorMessage>
                      Error submitting your form. Please try again or contact us
                      at <a href="tel:+19049981935">904.998.1935</a>
                    </ErrorMessage>
                  )}
                  <SubmitButton
                    type="submit"
                    aria-disabled={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader
                        type="Oval"
                        color={vars.colorWhite}
                        height={30}
                        width={30}
                      />
                    ) : (
                      submitButtonText
                    )}
                  </SubmitButton>
                </div>
              </StyledForm>
            ) : (
              <StyledForm as="div">
                <ThankYou>
                  <SoloHeading color={vars.colorAlmostBlack}>
                    Thank You
                  </SoloHeading>
                  <p>{serverState.message}</p>
                </ThankYou>
              </StyledForm>
            )
          }
        </Formik>
      </Container>
    </Section>
  )
}

const StyledForm = styled(Form)`
  background-color: ${vars.colorWhite};
  color: ${vars.colorAlmostBlack};
  padding: 2em;
  border-radius: ${vars.borderRadiusLarge};
  margin: 0 auto;

  .required {
    color: ${vars.colorRed};
  }

  @media (min-width: ${vars.breakpointMedium}) {
    max-width: 75%;
  }
`

const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: ${vars.borderRadiusSmall};
  background-color: ${vars.colorGreen};
  color: ${vars.colorWhite};
  font-weight: ${vars.fontWeightNormal};
  padding: 1em 4em;
  cursor: pointer;
  width: 100%;
  height: 4rem;
  font-size: ${vars.fontSizeText};

  @media (min-width: ${vars.breakpointLarge}) {
    max-width: 20rem;
  }
`

const ThankYou = styled.div`
  padding: 1em 2em 0;
`

export default ContactForm
