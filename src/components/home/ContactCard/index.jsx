import Link from 'next/link';
import { Mail, Phone } from 'react-feather';
import styles from './ContactCard.module.scss';

export const ContactCard = () => {
	return (
		<section>
			<h2>Contacto</h2>
			<div className={styles.ContactCard}>
				<h3>Contactanos a través de:</h3>
				<section className={styles.ContactCard__info}>
					<section>
						<div>
							<Phone size={18} />
							<span>(844) 420-9500</span>
						</div>
						<div>
							<Mail size={18} />
							<span>contacto@pyaesa.com.mx</span>
						</div>
					</section>
					<Link href='/contacto'>Ver más</Link>
				</section>
			</div>
		</section>
	);
};
