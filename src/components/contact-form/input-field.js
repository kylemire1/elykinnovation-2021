import React from 'react'
import { ErrorMessage, Field, useField } from 'formik'
import { FormControl } from '../styled/global'

import Label from './label'

const TextInputField = ({
  'aria-hidden': ariaHidden,
  className,
  id,
  innerRef,
  isRequired,
  label,
  name,
  placeholder,
  type,
}) => {
  const [, meta] = useField(id, name, placeholder, type)
  return (
    <FormControl>
      <Label id={id} type={type} isRequired={isRequired}>
        {label}
      </Label>
      <Field
        as="input"
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
      />
      <ErrorMessage id={`${id}-error`} name={name} component="small" />
    </FormControl>
  )
}

TextInputField.defaultProps = {
  'aria-hidden': false,
  innerRef: null,
  isRequired: null,
  className: '',
}

export const TextAreaField = ({
  className,
  id,
  innerRef,
  isRequired,
  label,
  name,
  placeholder,
  rows,
  type,
}) => {
  const [, meta] = useField(id, name, placeholder, type)
  return (
    <FormControl>
      <Label type={type} id={id} isRequired={isRequired}>
        {label}
      </Label>
      <Field
        as="textarea"
        id={id}
        aria-invalid={meta.error && meta.touched ? 'true' : null}
        aria-describedby={meta.error && meta.touched ? `${id}-error` : null}
        aria-required={isRequired ? true : null}
        className={`${className}`}
        name={name}
        placeholder={placeholder}
        rows={rows}
        type={type}
        innerRef={innerRef}
      />

      <ErrorMessage id={`${id}-error`} name={name} component="small" />
    </FormControl>
  )
}

TextAreaField.defaultProps = {
  innerRef: null,
  className: '',
  isRequired: false,
  label: '',
  rows: '5',
}

export default TextInputField
