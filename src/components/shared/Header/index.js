import styles from './Header.module.scss';
import { Menu } from 'react-feather';

export const Header = () => {
	return (
		<header className={styles.Header}>
			<h1>Pyaesa Logo</h1>
			<button>
				<Menu />
			</button>
		</header>
	);
};
