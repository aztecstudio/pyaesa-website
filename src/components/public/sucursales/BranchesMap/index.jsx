import {
	APIProvider,
	Map,
	AdvancedMarker,
	InfoWindow,
	useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import styles from './BranchesMap.module.scss';
import { useState } from 'react';
import { env } from '@/config/env';

const { GOOGLE_MAPS_API_KEY, MAP_ID } = env;

const CENTER = {
	lat: 25.487347924579087,
	lng: -100.96939660378783,
};

export const BranchesMap = ({ branches }) => {
	const [openInfoWindow, setOpenInfoWindow] = useState({});

	const handleMarkerClick = id => {
		setOpenInfoWindow({ [id]: true });
	};

	const handleInfoWindowClose = id => {
		setOpenInfoWindow({ [id]: false });
	};

	return GOOGLE_MAPS_API_KEY ? (
		<APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
			<div className={styles.Container}>
				<Map defaultCenter={CENTER} defaultZoom={11} mapId={MAP_ID}>
					{branches.length > 0
						? branches.map(b => (
								<div key={`marker-${b.id}`}>
									<MapMarker
										branch={b}
										openInfoWindow={openInfoWindow}
										onClick={() => handleMarkerClick(b.id)}
										onClose={handleInfoWindowClose}
									/>
								</div>
							))
						: null}
				</Map>
			</div>
		</APIProvider>
	) : null;
};

const MapMarker = ({ branch, openInfoWindow, onClick, onClose }) => {
	const [markerRef, marker] = useAdvancedMarkerRef();
	return (
		<>
			<AdvancedMarker
				ref={markerRef}
				position={branch.locationMap}
				onClick={onClick}
			/>
			{openInfoWindow[branch.id] && (
				<InfoWindow
					anchor={marker}
					onCloseClick={() => onClose(branch.id)}
					maxWidth={300}
				>
					<div className='mapInfoWindow'>
						<p>{branch.title}</p>
						<p>{branch.address.full}</p>
						<p>{branch.city}</p>
						<a
							href={`https://www.google.com/maps/search/?api=1&query=${branch.locationMap.lat},${branch.locationMap.lng}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							Ver en Google Maps
						</a>
					</div>
				</InfoWindow>
			)}
		</>
	);
};
