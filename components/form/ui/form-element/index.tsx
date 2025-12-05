'use client'

import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  label: string,
  htmlFor?: string,
  error?: string
}>

const FormElement = ({ children, label, htmlFor, error }: Props) => (
  <div>
    <label className="block text-lg font-serif font-medium" htmlFor={htmlFor}>
      {label}
    </label>
    {children}
    <span className="mt-0.5 block text-sm text-orange-700 min-h-[20px]">
      {error}
    </span>
  </div>
)

export default FormElement
