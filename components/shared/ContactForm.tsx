'use client'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const FormSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
})

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={FormSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const token = await recaptchaRef.current?.executeAsync()
        recaptchaRef.current?.reset()
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...values, token }),
        })
        setSubmitting(false)
        if (res.ok) {
          resetForm()
          alert('Thank you for your message!')
        } else {
          alert('Something went wrong.')
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-4">
          <div>
            <Field
              name="name"
              placeholder="Name"
              className="w-full border p-2"
            />
            {errors.name && touched.name && (
              <div className="text-sm text-red-500">{errors.name}</div>
            )}
          </div>
          <div>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border p-2"
            />
            {errors.email && touched.email && (
              <div className="text-sm text-red-500">{errors.email}</div>
            )}
          </div>
          <div>
            <Field
              as="textarea"
              rows={4}
              name="message"
              placeholder="Message"
              className="w-full border p-2"
            />
            {errors.message && touched.message && (
              <div className="text-sm text-red-500">{errors.message}</div>
            )}
          </div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            size="invisible"
            ref={recaptchaRef}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black px-4 py-2 text-white"
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  )
}
