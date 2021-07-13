import { useCallback, useState } from 'react'

const useAsyncSubmit = recaptchaSiteKey => {
  const [serverState, setServerState] = useState({ ok: true, message: '' })
  const [showForm, setShowForm] = useState(true)

  const handleSubmit = useCallback(
    (values, actions) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(recaptchaSiteKey, { action: 'submit' })
          .then(token => {
            submitData(values, actions, token)
          })
      })
    },
    [recaptchaSiteKey]
  )

  const submitData = async (
    values,
    { setSubmitting, resetForm },
    recaptchaToken
  ) => {
    const payload = {
      formData: values,
      recaptchaToken,
    }
    try {
      setSubmitting(true)
      await fetch('/api/create-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then(res => res.json())
      setServerState({
        ok: true,
        message: "We've received your message and will be in touch shortly!",
      })
      setSubmitting(false)
      resetForm()
      setShowForm(false)
    } catch (error) {
      setServerState({ ok: false, message: error.message })
      setSubmitting(false)
    }
  }

  return { handleSubmit, serverState, showForm }
}

export default useAsyncSubmit
