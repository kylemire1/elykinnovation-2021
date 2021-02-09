import React from 'react'
import styled from 'styled-components'

import { FormControl } from '../styled/global'

const TextAreaWrapper = styled.div`
  height: 100%;
  position: relative;
`

const Textarea = ({
  inputLabel,
  inputName,
  placeholderText,
  required,
  handleChange,
  formValues,
}) => {
  return (
    <FormControl>
      <label htmlFor={inputName}>
        {inputLabel} {required && <span className="required">*</span>}
      </label>
      <TextAreaWrapper>
        <textarea
          onChange={handleChange}
          name={inputName}
          id={inputName}
          value={formValues[inputName]}
          placeholder={placeholderText}
          required={required}
        />
      </TextAreaWrapper>
    </FormControl>
  )
}

export default Textarea
