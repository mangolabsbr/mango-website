export async function POST(request: Request) {
  const body = (await request.json()) as {
    name: string;
    email: string;
    message: string;
  };

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        from_name: body.name,
        email_id: body.email,
        message: body.message,
      },
    }),
  });

  return response;
}
