import React from 'react'
import styled from 'styled-components'

import vars from '../../vars'

const Field = ({ type, ...field }) => {
  switch (type) {
    case 'text':
    case 'email':
    case 'phone':
      return <TextField type={type} {...field} />
    case 'select':
      return <SelectField type={type} {...field} />
    case 'textarea':
      return <TextAreaField type={type} {...field} />
    default:
      return <div>Unsupported field selected</div>
  }
}

const TextField = ({
  type,
  name,
  id,
  value,
  required,
  handleChange,
  label,
}) => {
  return (
    <FormControl>
      <Label label={label} htmlFor={id} isRequired={required} />
      <input
        name={name}
        type={type}
        required={required}
        id={id}
        value={value}
        onChange={e => handleChange(e, id, type)}
      />
    </FormControl>
  )
}

const TextAreaField = ({
  type,
  name,
  id,
  value,
  required,
  handleChange,
  label,
}) => {
  return (
    <FormControl>
      <Label label={label} htmlFor={id} isRequired={required} />
      <TextAreaWrapper>
        <textarea
          onChange={e => handleChange(e, id, type)}
          value={value}
          name={name}
          id={id}
          required={required}
        />
      </TextAreaWrapper>
    </FormControl>
  )
}

const SelectField = ({
  type,
  name,
  id,
  value,
  required,
  handleChange,
  label,
  choices,
}) => {
  return (
    <FormControl>
      <Label label={label} htmlFor={id} isRequired={required} />
      <StyledSelect
        required={required}
        name={name}
        id={id}
        value={value}
        onChange={e => handleChange(e, id, type)}
      >
        <option defaultChecked value="">
          Please Select a Response
        </option>
        {choices.length &&
          choices.map((text, idx) => (
            <option key={`${text}_${idx}`}>{text}</option>
          ))}
      </StyledSelect>
    </FormControl>
  )
}

const Label = ({ label, isRequired, htmlFor }) => {
  return (
    <label htmlFor={htmlFor}>
      {label}
      {isRequired && <span className="required">*</span>}
    </label>
  )
}

const StyledSelect = styled.select`
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5em;
`

const TextAreaWrapper = styled.div`
  height: 100%;
  position: relative;
`

const FormControl = styled.div`
  display: block;
  height: 100%;
  margin-bottom: 1.5rem;

  label,
  input,
  textarea {
    display: block;
    width: 100%;
  }

  label {
    font-weight: ${vars.fontWeightBold};
    margin-bottom: 0.5rem;
  }

  input {
    height: 2.5rem;
    padding: 0.5em;
  }

  input,
  textarea,
  select {
    border: solid ${vars.pixel} ${vars.colorGreenSmall};
    border-radius: ${vars.borderRadiusSmall};
    font-size: ${vars.fontSizeText};
  }

  textarea {
    height: 10rem;
    padding: 0.5em;
  }
`

export default Field
