import React from 'react'
import styled from 'styled-components'

import { FormControl } from '../styled/global'

const StyledSelect = styled.select`
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5em;
`

const Select = ({ options, inputName, inputLabel, required, handleChange }) => {
  return (
    <FormControl>
      <label htmlFor={inputName}>
        {inputLabel} {required && <span className="required">*</span>}
      </label>
      <StyledSelect name={inputName} id={inputName} onChange={handleChange}>
        {options &&
          options.length &&
          options.map((option, optionIndex) => (
            <option key={`Option_${optionIndex}`} value={option.optionValue}>
              {option.optionLabel}
            </option>
          ))}
      </StyledSelect>
    </FormControl>
  )
}

export default Select
