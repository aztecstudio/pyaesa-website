import { getPromoImage, uploadImage } from '@/services/files';

export async function GET() {
	try {
		const promoImage = await getPromoImage();
		return Response.json({ data: promoImage, success: true, status: 200 });
	} catch (error) {
		return Response.json({ error: error.message, status: 400 });
	}
}

export async function POST(req) {
	const data = await req.formData();
	const file = data.get('image');

	if (!file.size) {
		return Response.json({ error: 'Bad request', status: 400 });
	}

	try {
		await uploadImage(file);
		return Response.json({ success: true, status: 200 });
	} catch (error) {
		return Response.json({ error: error.message, status: 400 });
	}
}
