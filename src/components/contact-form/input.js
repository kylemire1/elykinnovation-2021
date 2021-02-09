import React from 'react'

import { FormControl } from '../styled/global'

const Input = ({
  inputLabel,
  inputName,
  placeholderText,
  inputType,
  required,
  formValues,
  handleChange,
}) => {
  return (
    <FormControl>
      <label htmlFor={inputName}>
        {inputLabel} {required && <span className="required">*</span>}
      </label>
      <input
        onChange={handleChange}
        type={inputType}
        name={inputName}
        id={inputName}
        value={formValues[inputName]}
        placeholder={placeholderText}
        required={required}
      />
    </FormControl>
  )
}

export default Input
