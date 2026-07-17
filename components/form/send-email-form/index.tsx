"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

type Status = "idle" | "sending" | "success" | "error";

const SendEmailForm = ({ className }: Props) => {
  const t = useTranslations("contact");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{t("name")}</Label>
          <Input
            id="contact-name"
            aria-invalid={!!errors.name}
            {...register("name")}
            autoFocus
          />
          {errors.name?.message && (
            <p className="text-sm text-destructive">{t(errors.name.message)}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">{t("email")}</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder={t("emailPlaceholder")}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-sm text-destructive">
              {t(errors.email.message)}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-message">{t("message")}</Label>
          <Textarea
            id="contact-message"
            rows={6}
            placeholder={t("messagePlaceholder")}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="text-sm text-destructive">
              {t(errors.message.message)}
            </p>
          )}
        </div>
        <Button
          type="submit"
          size="lg"
          className="h-11 w-full rounded-full text-base"
          disabled={status === "sending"}
        >
          {t("send")}
        </Button>
        {status === "success" && (
          <p className="text-center text-sm font-medium text-primary">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm font-medium text-destructive">
            {t("error")}
          </p>
        )}
      </div>
    </form>
  );
};

export default SendEmailForm;
