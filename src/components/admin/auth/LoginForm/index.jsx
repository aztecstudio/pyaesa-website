import styles from './LoginForm.module.scss';
export const LoginForm = () => {
	return (
		<form className={styles.Form}>
			<div className={styles.Form__title}>
				<h3>Inicia sesión</h3>
				<p>para acceder al panel de administración:</p>
			</div>
			<div className={styles.Form__inputGroup}>
				<label>Email</label>
				<input />
			</div>
			<div className={styles.Form__inputGroup}>
				<label>Contraseña</label>
				<input />
			</div>
			<button className={styles.Form__loginBtn}>Iniciar sesión</button>
		</form>
	);
};
