import {
	APIProvider,
	Map,
	AdvancedMarker,
	InfoWindow,
} from '@vis.gl/react-google-maps';
import styles from './BranchesMap.module.scss';
import { useEffect, useState } from 'react';

const CENTER = {
	lat: 25.487347924579087,
	lng: -100.96939660378783,
};

export const BranchesMap = ({ branches }) => {
	const [googleCredentials, setGoogleCredentials] = useState({});
	const [openInfoWindow, setOpenInfoWindow] = useState({});

	useEffect(() => {
		fetch('/api')
			.then(res => res.json())
			.then(data => setGoogleCredentials(data));
	}, []);

	const handleMarkerClick = id => {
		setOpenInfoWindow({ [id]: true });
	};

	const handleInfoWindowClose = id => {
		setOpenInfoWindow({ [id]: false });
	};

	return googleCredentials?.apiKey ? (
		<APIProvider apiKey={googleCredentials?.apiKey}>
			<div className={styles.Container}>
				<Map
					defaultCenter={CENTER}
					defaultZoom={11}
					mapId={googleCredentials?.mapId}
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
	) : null;
};
