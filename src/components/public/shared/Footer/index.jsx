import Image from 'next/image';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<section className={styles.Footer__logo}>
				<Image
					src='/images/sw-logo.png'
					width={1339}
					height={388}
					alt='Sherwin Williams logo'
				/>
				<p>Distribuidor autorizado</p>
			</section>
			<div className={styles.Footer__divider}></div>
			<section className={styles.Footer__info}>
				<p>
					&copy;{new Date().getFullYear()} <span>PYAESA</span> &nbsp;|&nbsp; All
					rights reserved.
				</p>
				<span>
					Desarrollado con 💚 por{' '}
					<a
						href='https://chrod.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						CHRod
					</a>
				</span>
			</section>
		</footer>
	);
};
