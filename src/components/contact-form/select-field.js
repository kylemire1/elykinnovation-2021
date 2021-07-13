import React from 'react'
import styled from 'styled-components'
import { ErrorMessage, Field, useField } from 'formik'

import { FormControl } from '../styled/global'
import Label from './label'

const SelectField = ({
  'aria-hidden': ariaHidden,
  className,
  id,
  innerRef,
  isRequired,
  label,
  name,
  placeholder,
  type,
  choices,
}) => {
  const [, meta] = useField(id, name, placeholder, type)

  return (
    <FormControl>
      <Label id={id} type={type} isRequired={isRequired}>
        {label}
      </Label>

      <StyledSelect
        component="select"
        id={id}
        aria-hidden={ariaHidden}
        aria-invalid={meta.error && meta.touched ? 'true' : null}
        aria-describedby={meta.error && meta.touched ? `${id}-error` : null}
        aria-required={isRequired ? true : null}
        className={className}
        name={name}
        placeholder={placeholder}
        type={type}
        innerRef={innerRef}
      >
        <option defaultChecked value="">
          Please Select a Response
        </option>
        {choices.length > 0 &&
          choices.map((c, index) => (
            <option key={`${name}_option_${index}`} value={c}>
              {c}
            </option>
          ))}
      </StyledSelect>
      <ErrorMessage id={`${id}-error`} name={name} component="small" />
    </FormControl>
  )
}

const StyledSelect = styled(Field)`
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5em;
`

export default SelectField
