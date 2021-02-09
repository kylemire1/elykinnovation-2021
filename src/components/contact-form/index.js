import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Input from './input'
import Textarea from './textarea'
import { Section, Container } from '../styled/global'

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
  font-size: ${vars.fontSizeText};

  @media (min-width: ${vars.breakpointLarge}) {
    width: auto;
  }
`

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $clientMutationId: String!
    $name: String!
    $email: String!
    $phone: String
    $interest: String!
    $message: String!
  ) {
    createSubmission(
      input: {
        clientMutationId: $clientMutationId
        name: $name
        email: $email
        phone: $phone
        interest: $interest
        message: $message
      }
    ) {
      success
      data
    }
  }
`

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  interest: '',
  message: '',
}

const ContactForm = ({
  sectionBackgroundColor,
  formFields,
  recipientEmail,
  submitButtonText,
}) => {
  const [formValues, setFormValues] = useState(INITIAL_STATE)

  const handleChange = e => {
    const { name, value } = e.currentTarget
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <Mutation mutation={CONTACT_MUTATION}>
          {(createSubmission, { loading, error, data }) =>
            console.log({ loading, error, data }) || (
              <StyledForm
                bg="colorWhite"
                onSubmit={async event => {
                  event.preventDefault()
                  createSubmission({
                    variables: {
                      clientMutationId: 'example123',
                      name: formValues.name,
                      email: formValues.email,
                      phone: formValues.phone,
                      interest: formValues.interest,
                      message: formValues.message,
                    },
                  })
                }}
              >
                {formFields &&
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
                          <div key={`Contactform_Default_${fieldIndex}`}>
                            Default
                          </div>
                        )
                    }
                  })}
                <SubmitButton>{submitButtonText}</SubmitButton>
              </StyledForm>
            )
          }
        </Mutation>
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
