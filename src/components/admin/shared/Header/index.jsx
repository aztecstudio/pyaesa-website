import { Power } from 'react-feather';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header className={styles.Container}>
			<h3 className={styles.Logo}>
				PYAESA <span>ADMIN</span>PANEL
			</h3>
			<button className={styles.Logout}>
				<Power size={20} />
			</button>
		</header>
	);
};
