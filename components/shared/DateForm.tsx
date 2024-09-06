'use client'
// This is a react component which uses TailwindCSS, Formik, and Yup.
// It implements a form with a text input called "StartDate" as well as a submit button.
// "StartDate" field is required and its maximum length is 64 characters
// The form will handle the submit by logging it to the console
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

interface FormValues {
  StartDate: string
}

const initialValues: FormValues = {
  StartDate: '',
}

const validationSchema = Yup.object().shape({
  StartDate: Yup.string()
    .required('Start date is required')
    .max(64, 'Start date cannot be longer than 64 characters'),
})

export default function DateForm({ title }) {
  const handleSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="StartDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <Field
                name="StartDate"
                type="text"
                className={`mt-1 block border-md w-full rounded-md border-black ${errors.StartDate && touched.StartDate ? 'border-red-500' : ''}`}
              />
              <ErrorMessage
                name="StartDate"
                component="div"
                className="text-red-500 text-xs mt-2"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
