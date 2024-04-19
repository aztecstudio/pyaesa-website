import { Grid, Map } from 'react-feather';
import styles from './ToggleView.module.scss';

export const ToggleView = ({ setIsGrid }) => {
	return (
		<div className={styles.Toggle}>
			<button
				className={styles.Toggle__gridIcon}
				onClick={() => setIsGrid(true)}
			>
				<Grid />
				<span>Lista</span>
			</button>
			<button
				className={styles.Toggle__mapIcon}
				onClick={() => setIsGrid(false)}
			>
				<Map />
				<span>Mapa</span>
			</button>
		</div>
	);
};
