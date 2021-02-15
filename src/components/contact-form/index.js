import React, { useState, useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import parse from 'html-react-parser'
import Loader from 'react-loader-spinner'

import Input from './input'
import Textarea from './textarea'
import { Section, Container, ErrorMessage, SoloHeading } from '../styled/global'

import vars from '../../vars'
import Select from './select'

const StyledForm = styled.form`
  background-color: ${({ bg }) => vars[bg] || vars.colorTransparent};
  color: ${({ bg }) =>
    bg !== 'colorWhite' ? vars.colorWhite : vars.colorAlmostBlack};
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
  padding: 2em;
`

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  interest: 'Not Sure',
  message: '',
}

const ContactForm = ({
  sectionBackgroundColor,
  formFields,
  submitButtonText,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [submittedSuccess, setSubmittedSuccess] = useState(false)
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const formRef = useRef()

  useEffect(() => {
    setSubmittedSuccess(false)
    setError(false)
    setIsLoading(false)
    setFormValues(INITIAL_STATE)
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
      const submissionResponse = await fetch(
        '/.netlify/functions/create-submission',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formValues }),
        }
      )
      const submissionData = await submissionResponse.json()

      if (!submissionData?.data?.createSubmission.success) {
        throw new Error('Submission Failed')
      }

      setFormValues(INITIAL_STATE)
      formRef.current.reset()
      setIsLoading(false)
      setSubmittedSuccess(true)
    } catch (err) {
      setIsLoading(false)
      setError(
        `There was a problem submitting your message. Please try again or call <a href="tel:+19049981935">904.998.1935</a>`
      )
    }
  }

  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <StyledForm ref={formRef} bg="colorWhite">
          {!submittedSuccess &&
            formFields &&
            formFields.length > 0 &&
            formFields.map((field, fieldIndex) => {
              switch (field.fieldGroupName) {
                case 'page_Layoutsections_Components_ContactForm_FormFields_Input':
                  return (
                    <Input
                      key={`ContactForm_${field}_${fieldIndex}`}
                      {...field}
                      formValues={formValues}
                      handleChange={handleChange}
                    />
                  )
                case 'page_Layoutsections_Components_ContactForm_FormFields_Textarea':
                  return (
                    <Textarea
                      key={`ContactForm_${field}_${fieldIndex}`}
                      {...field}
                      formValues={formValues}
                      handleChange={handleChange}
                    />
                  )
                case 'page_Layoutsections_Components_ContactForm_FormFields_Select':
                  return (
                    <Select
                      key={`ContactForm_${field}_${fieldIndex}`}
                      {...field}
                      formValues={formValues}
                      handleChange={handleChange}
                    />
                  )
                default:
                  return (
                    <div key={`Contactform_Default_${fieldIndex}`}>A component is not yet defined for that type of form field</div>
                  )
              }
            })}
          {error && (
            <ErrorMessage>
              <p>{parse(error)}</p>
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

export const fragment = graphql`
  fragment ContactForm on WpPage_Layoutsections_Components_ContactForm {
    fieldGroupName
    recipientEmail
    submitButtonText
    sectionBackgroundColor
    formFields {
      ... on WpPage_Layoutsections_Components_ContactForm_FormFields_Input {
        fieldGroupName
        inputLabel
        inputName
        placeholderText
        inputType
        required
      }
      ... on WpPage_Layoutsections_Components_ContactForm_FormFields_Textarea {
        fieldGroupName
        inputLabel
        inputName
        placeholderText
        required
      }
      ... on WpPage_Layoutsections_Components_ContactForm_FormFields_Select {
        fieldGroupName
        inputLabel
        inputName
        required
        options {
          optionLabel
          optionValue
        }
      }
    }
  }
`

export default ContactForm
