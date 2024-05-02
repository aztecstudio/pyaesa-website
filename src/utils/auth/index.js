import { env } from '@/config/env';

export const verifyIdToken = async idToken => {
	const firebaseAccountInfoURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=${env.API_KEY}`;

	try {
		const res = await fetch(firebaseAccountInfoURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				idToken,
			}),
		});

		const { users } = await res.json();

		return !!users;
	} catch (error) {
		console.error(error);
	}
};
