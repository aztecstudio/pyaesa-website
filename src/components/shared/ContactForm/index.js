import styles from './ContactForm.module.scss';

export const ContactForm = () => {
	return (
		<form className={styles.Form}>
			<div className={styles.Form__inputGroup}>
				<label>Nombre</label>
				<input />
			</div>
			<div className={styles.Form__inputGroup}>
				<label>Teléfono</label>
				<input />
			</div>
			<div className={styles.Form__inputGroup}>
				<label>Email</label>
				<input />
			</div>
			<div className={styles.Form__inputGroup}>
				<label>Asunto</label>
				<input />
			</div>
			<div className={styles.Form__textArea}>
				<label>Mensaje</label>
				<textarea rows='5' />
			</div>
			<button className={styles.Form__button}>Enviar</button>
		</form>
	);
};
