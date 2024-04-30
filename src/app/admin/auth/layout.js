import styles from './AuthLayout.module.scss';

const AuthLayout = ({ children }) => {
	return (
		<main className={styles.Container}>
			<div>
				<h2>
					PYAESA <span>ADMIN</span>PANEL
				</h2>
				{children}
			</div>
		</main>
	);
};

export default AuthLayout;
