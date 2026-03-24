import { createClientFromRequest } from 'npm:@base44/sdk@0.8.21';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, company, message } = await req.json();

    const body = `
New inquiry from the Eaureco website:

Name: ${name}
Email: ${email}
Company: ${company || "N/A"}

Message:
${message}
    `.trim();

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: "goforjiwon@kaist.ac.kr",
      subject: `New Contact Form Submission from ${name}`,
      body
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});