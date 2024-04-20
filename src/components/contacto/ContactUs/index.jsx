import { Mail, MapPin, Phone } from 'react-feather';
import styles from './ContactUs.module.scss';
import { ContactForm } from '@/components';
import ContactLogo from '../ContactLogo';

export const ContactUs = () => {
	return (
		<div className={styles.ContactUs}>
			<h3>Atención al cliente:</h3>
			<section className={styles.ContactUs__info}>
				<div className={styles.ContactUs__info__logo}>
					<ContactLogo />
				</div>
				<div className={styles.ContactUs__info__text}>
					<div className={styles.phone}>
						<Phone size={20} />
						<div>
							<span>(844) 420-9500</span>
							<span>(844) 412-0412</span>
							<span>(844) 410-3390</span>
						</div>
					</div>
					<div className={styles.email}>
						<Mail size={20} />
						<span>contacto@pyaesa.com.mx</span>
					</div>
					<div className={styles.location}>
						<MapPin size={16} />
						<span>
							Abasolo # 972 (Entre Corona y P. Agüero) Saltillo, Coahuila 25900,
							México
						</span>
					</div>
				</div>
			</section>
			<h3>
				Te invitamos a que ingreses los datos solicitados para contactarte:
			</h3>
			<section className={styles.ContactUs__form}>
				<ContactForm />
			</section>
		</div>
	);
};
