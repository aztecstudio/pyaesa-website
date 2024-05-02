'use client';
import { Power } from 'react-feather';
import styles from './Header.module.scss';
import { logout } from '@/services/auth';
import { useRouter } from 'next/navigation';

export const Header = () => {
	const router = useRouter();

	const handleLogout = async () => {
		await logout();
		router.push('/admin/auth');
	};

	return (
		<header className={styles.Container}>
			<h3 className={styles.Logo}>
				PYAESA <span>ADMIN</span>PANEL
			</h3>
			<button className={styles.Logout} onClick={handleLogout}>
				<Power size={20} />
			</button>
		</header>
	);
};
