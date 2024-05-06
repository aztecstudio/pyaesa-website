import { ContactUs } from '@/components';

export const metadata = {
	title: 'PYAESA - Contacto',
	description: 'Aquí puedes contactarnos',
};

const ContactPage = () => {
	return (
		<section>
			<h2>
				Para <span>más información contáctanos</span>
			</h2>
			<ContactUs />
		</section>
	);
};

export default ContactPage;
