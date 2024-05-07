import Image from 'next/image';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<section className={styles.Footer__logo}>
				<Image
					src='/sw-logo.png'
					width={1339}
					height={388}
					alt='Sherwin Williams logo'
				/>
				<p>Distribuidor autorizado</p>
			</section>
			<div className={styles.Footer__divider}></div>
			<section className={styles.Footer__info}>
				<p>
					&copy;{new Date().getFullYear()} <span>PYAESA</span> &nbsp;|&nbsp;
					Todos los derechos reservados.
				</p>
				<span>
					Desarrollado con 💚 por{' '}
					<a
						href='https://aztecstudio.net/'
						target='_blank'
						rel='noopener noreferrer'
					>
						AztecStudio
					</a>
				</span>
			</section>
		</footer>
	);
};
