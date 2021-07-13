const validEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const validate = values => {
  const errors = {}
  if (values.name.trim() === '') {
    errors.name = 'Please enter your name!'
  }
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address!'
  } else if (!validEmail(values.email)) {
    errors.email = 'Please enter a valid email address!'
  }
  if (!values.message.trim()) {
    errors.message = "Don't forget to write the message!"
  } else if (values.message.trim() === '' || values.message.length > 1024) {
    errors.message =
      'Your message is a little long. Try trimming it down, or give us a call at 904.998.135!'
  }
  if (!values.interest.trim()) {
    errors.interest = 'Please select an area of interest!'
  }
  return errors
}
