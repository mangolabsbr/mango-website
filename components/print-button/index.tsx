'use client'

import Button from "@/components/form/ui/button"
import { ButtonHTMLAttributes, useEffect } from "react"

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'>

const elementQuery = 'header, .resume-outside, .print-container'
const printHideClass = 'print-hidden'

const hideElements = () => {
  document.querySelectorAll(elementQuery).forEach(element => element.classList.add(printHideClass))
}

const showElements = () => {
  document.querySelectorAll(elementQuery).forEach(element => element.classList.remove(printHideClass))
}

const PrintButton = ({ children, ...buttonProps }: Props) => {
  useEffect(() => {
    window.addEventListener('beforeprint', hideElements);
    window.addEventListener('afterprint', showElements);

    return () => {
      window.removeEventListener('beforeprint', hideElements);
      window.removeEventListener('afterprint', showElements);
    }
  }, [])

  const handleClick = async () => {
    print();
  }

  return (
    <Button type="button" onClick={handleClick} {...buttonProps}>{children}</Button>
  )
}

export default PrintButton
