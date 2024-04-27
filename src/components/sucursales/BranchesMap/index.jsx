import {
	APIProvider,
	Map,
	AdvancedMarker,
	InfoWindow,
} from '@vis.gl/react-google-maps';
import styles from './BranchesMap.module.scss';
import { useState } from 'react';

export const BranchesMap = ({ branches }) => {
	const [openInfoWindow, setOpenInfoWindow] = useState({});

	const handleMarkerClick = id => {
		setOpenInfoWindow({ [id]: true });
	};

	const handleInfoWindowClose = id => {
		setOpenInfoWindow({ [id]: false });
	};

	const CENTER = {
		lat: 25.487347924579087,
		lng: -100.96939660378783,
	};

	return (
		<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
			<div className={styles.Container}>
				<Map
					defaultCenter={CENTER}
					defaultZoom={11}
					mapId={process.env.NEXT_PUBLIC_MAP_ID}
				>
					{branches.map(b => {
						const markerKey = `marker-${b.id}`;
						const infoWindowKey = `infoWindow-${b.id}`;

						return (
							<div key={markerKey}>
								<AdvancedMarker
									position={b.locationMap}
									onClick={() => handleMarkerClick(b.id)}
								/>
								{openInfoWindow[b.id] && (
									<InfoWindow
										key={infoWindowKey}
										position={b.locationMap}
										onCloseClick={() => handleInfoWindowClose(b.id)}
									>
										<p>{b.title}</p>
									</InfoWindow>
								)}
							</div>
						);
					})}
				</Map>
			</div>
		</APIProvider>
	);
};
