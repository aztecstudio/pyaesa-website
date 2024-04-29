import styles from './AdminLayout.module.scss';

const AdminLayout = ({ children }) => {
	return <main className={styles.Container}>{children}</main>;
};

export default AdminLayout;
