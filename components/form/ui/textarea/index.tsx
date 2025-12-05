"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import FormElement from "../form-element";

type Props = InputHTMLAttributes<HTMLTextAreaElement> &
  Omit<UseFormRegisterReturn, "ref"> & {
    label: string;
    error?: FieldError;
  };

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, ...textAreaProps }, ref) => (
    <FormElement
      label={label}
      error={error?.message}
      htmlFor={textAreaProps.name}
    >
      <textarea
        className="bg-white w-full rounded-md border-2 border-black shadow-2 px-2 py-1 block focus-visible:outline-none focus-visible:border-orange-700"
        id={textAreaProps.name}
        ref={ref}
        {...textAreaProps}
      />
    </FormElement>
  )
);

TextArea.displayName = "TextArea";

export default TextArea;
