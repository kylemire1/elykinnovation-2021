import React, { useState } from 'react'
import styled from 'styled-components'
import useDimensions from 'react-use-dimensions'

import { FormControl } from '../styled/global'

import vars from '../../vars'

const StyledForm = styled.form`
  color: ${vars.colorAlmostBlack};
`

const InputGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);

    .message {
      grid-column: 2 / 3;
      grid-row: 1 / 5;
    }
  }
`

const TextAreaWrapper = styled.div`
  height: 100%;
  position: relative;
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

const ContactForm = () => {
  const [ref, { height }] = useDimensions()
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  })

  const handleChange = e => {
    const { name, value } = e.currentTarget
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <StyledForm>
      <InputGrid>
        <FormControl>
          <label htmlFor="name">Your Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={formValues['name']}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={handleChange}
            type="phone"
            name="phone"
            id="phone"
            value={formValues['phone']}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={formValues['email']}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="interest">Area of Interest</label>
          <input
            onChange={handleChange}
            type="interest"
            name="interest"
            id="interest"
            value={formValues['interest']}
          />
        </FormControl>
        <FormControl $height={height} className="message">
          <label ref={ref} htmlFor="message">
            Message
          </label>
          <TextAreaWrapper>
            <textarea
              onChange={handleChange}
              name="message"
              id="message"
              value={formValues['message']}
            />
          </TextAreaWrapper>
        </FormControl>
      </InputGrid>
      <SubmitButton>Get In Touch</SubmitButton>
    </StyledForm>
  )
}

export default ContactForm
