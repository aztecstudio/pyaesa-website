import nodemailer from 'nodemailer';
import { env } from '@/config/env';

const email = env.EMAIL_USER;
const password = env.EMAIL_PASSWORD;
const emailTo = env.EMAIL_TO;

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email,
		pass: password,
	},
});

export const mailOptions = {
	from: email,
	to: emailTo,
};
