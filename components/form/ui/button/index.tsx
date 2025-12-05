import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

const Button = ({ children, className, ...props }: Props) => (
  <button className={`text-lg font-serif font-medium bg-orange-900 text-white rounded-md border-2 border-black shadow-2 px-2 py-1 active:shadow-none relative active:top-0.5 active:left-0.5 disabled:pointer-events-none disabled:opacity-70 focus-visible:outline-none focus-visible:border-orange-700 ${className || ''}`} {...props}>{children}</button>
)

export default Button
