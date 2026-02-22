"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/input";
import TextArea from "../ui/textarea";
import Button from "../ui/button";
import { useState } from "react";
import { useTranslations } from "next-intl";

enum FormErrors {
  NAME_REQUIRED = "nameRequired",
  EMAIL_REQUIRED = "emailRequired",
  EMAIL_INVALID = "emailInvalid",
  MESSAGE_REQUIRED = "messageRequired",
}

const schema = z.object({
  name: z.string().nonempty(FormErrors.NAME_REQUIRED),
  email: z
    .string()
    .nonempty(FormErrors.EMAIL_REQUIRED)
    .email(FormErrors.EMAIL_INVALID),
  message: z.string().nonempty(FormErrors.MESSAGE_REQUIRED),
});

export type FormData = z.infer<typeof schema>;

type Props = {
  className?: string;
};

const SendEmailForm = ({ className }: Props) => {
  const t = useTranslations("contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [sending, setSending] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setSending(true);

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={t("name")}
        error={
          errors.name
            ? {
                ...errors.name,
                message: errors.name.message
                  ? t(errors.name.message)
                  : errors.name.message,
              }
            : undefined
        }
        {...register("name")}
      />
      <Input
        label={t("email")}
        error={
          errors.email
            ? {
                ...errors.email,
                message: errors.email.message
                  ? t(errors.email.message)
                  : errors.email.message,
              }
            : undefined
        }
        placeholder={t("emailPlaceholder")}
        {...register("email")}
      />
      <TextArea
        label={t("message")}
        placeholder={t("messagePlaceholder")}
        error={
          errors.message
            ? {
                ...errors.message,
                message: errors.message.message
                  ? t(errors.message.message)
                  : errors.message.message,
              }
            : undefined
        }
        {...register("message")}
      />
      <div className="text-center">
        <Button className="mt-4 min-w-[200px]" disabled={sending}>
          {t("send")}
        </Button>
      </div>
    </form>
  );
};

export default SendEmailForm;
