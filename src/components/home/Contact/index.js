import { Mail, Phone } from 'react-feather';
import styles from './Contact.module.scss';
import Link from 'next/link';
import { ContactForm } from '@/components/shared/ContactForm';

export const Contact = () => {
	return (
		<section className={styles.Contact}>
			<h2>Contacto</h2>
			<div className={styles.Contact__card}>
				<h3>Contactanos a través de:</h3>
				<section className={styles.Contact__contactUs}>
					<section>
						<div>
							<Phone size={20} />
							<p>(844)420-9500</p>
						</div>
						<div>
							<Mail size={20} />
							<p>contacto@pyaesa.com.mx</p>
						</div>
					</section>
					<Link href='/contacto'>Ir a contacto</Link>
				</section>
				<section className={styles.Contact__form}>
					<h3>O rellena el formulario:</h3>
					<ContactForm />
				</section>
			</div>
		</section>
	);
};
