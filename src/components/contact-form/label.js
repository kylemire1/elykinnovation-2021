import React from 'react'

const Label = ({ type, isRequired, children, id }) => {
  if (type === 'hidden') {
    return null
  }

  return (
    <label htmlFor={id} className="screen-reader-text">
      {children} {isRequired && <span className="required">*</span>}
    </label>
  )
}

export default Label
