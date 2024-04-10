'use client';
import { useContext } from 'react';
import styles from './Header.module.scss';
import { Menu } from 'react-feather';
import { Context } from '@/Context';

export const Header = () => {
	const { isHidden, setIsHidden } = useContext(Context);

	const handleMenu = () => {
		setIsHidden(!isHidden);
	};

	return (
		<header className={styles.Header}>
			<h1>Pyaesa Logo</h1>
			<button onClick={handleMenu}>
				<Menu />
			</button>
		</header>
	);
};
