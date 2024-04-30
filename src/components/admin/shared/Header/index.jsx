'use client';
import { Power } from 'react-feather';
import styles from './Header.module.scss';
import { logout } from '@/services/auth';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export const Header = () => {
	const { setToken } = useAuth();
	const router = useRouter();

	const handleLogout = async () => {
		await logout();
		setToken(null);
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
