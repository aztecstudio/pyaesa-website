export const sendMail = async data => {
	const res = await fetch('/api/mail', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	});
	if (!res.ok) throw new Error('Ocurrió un error al enviar el email!');
	return await res.json();
};
