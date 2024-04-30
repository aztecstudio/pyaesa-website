import { AdminHeader } from '@/components';
import styles from './AdminLayout.module.scss';

const AdminLayout = ({ children }) => {
	return (
		<main className={styles.Container}>
			<AdminHeader />
			{children}
		</main>
	);
};

export default AdminLayout;
