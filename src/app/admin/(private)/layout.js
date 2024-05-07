import { AdminHeader } from '@/components';
import styles from './PrivateLayout.module.scss';

export const metadata = {
	title: 'PYAESA - Admin Panel',
};

const PrivateLayout = ({ children }) => {
	return (
		<>
			<AdminHeader />
			<main className={styles.Container}>{children}</main>
		</>
	);
};

export default PrivateLayout;
