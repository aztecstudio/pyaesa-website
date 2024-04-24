'use client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export const BranchesMap = () => {
	const position = { lat: 53.54992, lng: 10.00678 };

	return (
		<APIProvider apiKey={'AIzaSyDUJGu7u22D8-vcfW-ln9Pkw_huVDuu7zA'}>
			<Map defaultCenter={position} defaultZoom={10}>
				<Marker position={position} />
			</Map>
		</APIProvider>
	);
};
