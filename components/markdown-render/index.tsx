'use client'

import { ReactMarkdown } from "react-markdown/lib/react-markdown"

type Props = {
  className?: string
  content?: string
}

const MarkdownRender = ({ className, content = '' }: Props) => {
  return (
    <ReactMarkdown className={`markdown ${className || ''}`}>
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRender
