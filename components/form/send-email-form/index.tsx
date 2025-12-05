'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../ui/input'
import TextArea from '../ui/textarea'
import Button from '../ui/button'
import { useState } from 'react'

const schema = z.object({
  name: z.string().nonempty('Name required'),
  email: z.string().nonempty('Email required').email('Invalid format'),
  message: z.string().nonempty('Message content required')
})

export type FormData = z.infer<typeof schema>

type Props = {
  className?: string
}

const SendEmailForm = ({ className }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })
  const [sending, setSending] = useState<boolean>(false)

  const onSubmit = async (data: FormData) => {
    setSending(true)

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" error={errors.name} {...register('name')} />
      <Input label="Email" error={errors.email} placeholder="How can I contact you back?" {...register('email')} />
      <TextArea
        label="Message"
        placeholder="Be as descriptive as possible."
        error={errors.message}
        {...register('message')}
      />
      <div className="text-center">
        <Button className="mt-4 min-w-[200px]" disabled={sending}>Send</Button>
      </div>
    </form>
  )
}

export default SendEmailForm
