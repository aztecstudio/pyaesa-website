import { AdminHeader } from '@/components';
import styles from './PrivateLayout.module.scss';

export const metadata = {
	title: 'PYAESA - Admin Panel',
};

const PrivateLayout = ({ children }) => {
	return (
		<main className={styles.Container}>
			<AdminHeader />
			{children}
		</main>
	);
};

export default PrivateLayout;
