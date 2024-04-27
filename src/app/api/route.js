export async function GET() {
	const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
	const googleMapId = process.env.MAP_ID;

	return Response.json({ apiKey: googleMapsApiKey, mapId: googleMapId });
}
