import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Loader from 'react-loader-spinner'

import { Container, Section, ErrorMessage, SoloHeading } from '../styled/global'

import vars from '../../vars'
import Field from './field'

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

const ContactForm = ({ submitButtonText, sectionBackgroundColor }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [submittedSuccess, setSubmittedSuccess] = useState(false)
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES)
  const formRef = useRef(null)

  useEffect(() => {
    setSubmittedSuccess(false)
    setError(false)
    setIsLoading(false)
    setFormValues(INITIAL_FORM_VALUES)
  }, [])

  const handleChange = e => {
    const { name, value } = e.currentTarget
    setFormValues({
      ...formValues,
      [name]: value,
    })
    setError(null)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setSubmittedSuccess(false)
    try {
      const submissionResponse = await fetch('/api/create-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formValues }),
      }).then(res => res.json())

      setIsLoading(false)

      if (submissionResponse.error) {
        throw new Error(submissionResponse.message)
      }

      setFormValues(INITIAL_FORM_VALUES)
      formRef.current.reset()
      setIsLoading(false)
      setSubmittedSuccess(true)
    } catch (err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <StyledForm onSubmit={handleSubmit} ref={formRef}>
          {!submittedSuccess && (
            <>
              <Field
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                handleChange={handleChange}
                label="Name"
                required
              />
              <Field
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                handleChange={handleChange}
                label="Email Address"
                required
              />
              <Field
                type="phone"
                name="phone"
                id="phone"
                value={formValues.phone}
                handleChange={handleChange}
                label="Phone Number"
              />
              <Field
                type="select"
                name="interest"
                id="interest"
                value={formValues.interest}
                choices={[
                  'Website Development',
                  'Website Rescue',
                  'Web Application',
                  'Content Management System',
                  'Search Engine Optimization',
                  'Pay-Per-Click Advertising',
                  'Email Marketing',
                  'Android App',
                  'Just Saying "Hey!"',
                  'Release the Kraken!',
                ]}
                handleChange={handleChange}
                label="Area of Interest"
                required
              />
              <Field
                type="textarea"
                name="message"
                id="message"
                value={formValues.message}
                handleChange={handleChange}
                label="Message"
                required
              />
            </>
          )}
          {error && (
            <ErrorMessage>
              <p>{error}</p>
            </ErrorMessage>
          )}
          {submittedSuccess && (
            <ThankYou>
              <SoloHeading color={vars.colorAlmostBlack}>Thank You</SoloHeading>
              We've received your message and will be in touch shortly!
            </ThankYou>
          )}
          {!submittedSuccess && (
            <SubmitButton onClick={handleSubmit}>
              {!isLoading ? (
                submitButtonText
              ) : (
                <Loader
                  type="Oval"
                  color={vars.colorWhite}
                  height={30}
                  width={30}
                />
              )}
            </SubmitButton>
          )}
        </StyledForm>
      </Container>
    </Section>
  )
}

const StyledForm = styled.form`
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

const ThankYou = styled.div`
  padding: 2em;
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

export default ContactForm
