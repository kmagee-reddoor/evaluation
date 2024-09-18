"use client";
import { useFormik } from "formik";
import React from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

export type contrastRow = {
  text: string;
  textColor: string;
  bgColor: string;
  createdAt: string;
};

// Define the Zod schema
const textRowSchema = z.object({
  text: z.string().min(3, "Text is required"),
  textColor: z.string().min(6, "Text color is required"),
  bgColor: z.string().min(6, "Background color is required"),
});

type ContrastFormProps = {
  addRow: (row: contrastRow) => void;
};

const ContrastForm: React.FC<ContrastFormProps> = ({ addRow }) => {
  const formik = useFormik({
    initialValues: {
      text: "Test",
      textColor: "#000000",
      bgColor: "#ffffff",
    },
    validationSchema: toFormikValidationSchema(textRowSchema),
    onSubmit: (values, { resetForm }) => {
      addRow({ ...values, createdAt: new Date().toISOString() });
      resetForm();
    },
  });

  return (
    <form className="w-full max-w-lg mb-6" onSubmit={formik.handleSubmit}>
      <div className="flex gap-8">
        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Sample Text</span>
          <input
            type="text"
            name="text"
            placeholder="Enter your text"
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 border border-gray-300 rounded text-black"
            required
          />
          {formik.touched.text && formik.errors.text ? (
            <div className="text-red-500 text-sm">{formik.errors.text}</div>
          ) : null}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Text Color</span>
          <input
            type="color"
            name="textColor"
            value={formik.values.textColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded"
          />
          {formik.touched.textColor && formik.errors.textColor ? (
            <div className="text-red-500 text-sm">
              {formik.errors.textColor}
            </div>
          ) : null}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1">Background Color</span>
          <input
            type="color"
            name="bgColor"
            value={formik.values.bgColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded"
          />
          {formik.touched.bgColor && formik.errors.bgColor ? (
            <div className="text-red-500 text-sm">{formik.errors.bgColor}</div>
          ) : null}
        </label>
      </div>
      <button
        type="submit"
        className="p-2 mt-4 w-full bg-blue-700 text-white font-bold rounded"
      >
        Add Row
      </button>
    </form>
  );
};

export default ContrastForm;
