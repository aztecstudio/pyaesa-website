import { transporter, mailOptions } from '@/config/nodemailer';
import { generateEmailContent } from '@/utils/email';

export async function POST(req) {
	const data = await req.json();

	if (
		!data ||
		!data.name ||
		!data.phone ||
		!data.email ||
		!data.subject ||
		!data.message
	) {
		return Response.json({ error: 'Bad request' }, { status: 400 });
	}

	try {
		await transporter.sendMail({
			...mailOptions,
			...generateEmailContent(data),
			subject: data.subject,
		});
		return Response.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error(error);
		return Response.json({ error: error.message }, { status: 400 });
	}
}
