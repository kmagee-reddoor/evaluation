'use client'
// This is a react component which uses TailwindCSS, Formik, and Yup.
// It implements a form with a text input called "StartDate" as well as a submit button.
// "StartDate" field is required and its maximum length is 64 characters
// The form will handle the submit by logging it to the console

import { isValid, parse } from 'date-fns'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validDateFormats = [
  'MM/dd/yyyy', // Example: 06/13/2024
  'MM-dd-yyyy', // Example: 06-13-2024
  'yyyy/MM/dd', // Example: 2024/06/13
  'yyyy-MM-dd', // Example: 2024-06-13
  'dd/MM/yyyy', // Example: 13/06/2024
  'dd-MM-yyyy', // Example: 13-06-2024
  'MMMM dd, yyyy', // Example: June 13, 2024
  'MMM dd, yyyy', // Example: Jun 13, 2024
  'yyyyMMdd', // Example: 20240613
  'dd MMM yyyy', // Example: 13 Jun 2024
  'MMM-dd-yyyy', // Example: Jun-13-2024
  'MM/dd/yy', // Example: 06/13/24
]

// Helper function to check if at least one date format is valid for parsing
const parseDateString = (originalValue) => {
  return validDateFormats.some((format) => {
    const parsed = parse(originalValue, format, new Date())
    return isValid(parsed)
  })
}

// Define the validation schema using Yup
const validationSchema = Yup.object({
  StartDate: Yup.string()
    .max(64, 'Must be 64 characters or less')
    .test('isValidDateFormat', 'Invalid date format', (value) =>
      parseDateString(value),
    )
    .required('Required'),
})

const MyFormComponent = () => {
  // Use Formik for form state management and handling submission
  const formik = useFormik({
    initialValues: {
      StartDate: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form data', values.StartDate)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="StartDate"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Start Date
        </label>
        <input
          id="StartDate"
          name="StartDate"
          type="text"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formik.touched.StartDate && formik.errors.StartDate
              ? 'border-red-500'
              : ''
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.StartDate}
        />
        {formik.touched.StartDate && formik.errors.StartDate ? (
          <p className="text-red-500 text-xs italic">
            {formik.errors.StartDate}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  )
}

export default MyFormComponent
