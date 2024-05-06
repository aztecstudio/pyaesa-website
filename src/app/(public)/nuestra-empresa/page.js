import { AboutUs, AboutUsGrid, Environment } from '@/components';

export const metadata = {
	title: 'PYAESA - Nuestra empresa',
	description: 'Aquí puedes conocer más sobre nosotros',
};

const AboutUsPage = () => {
	return (
		<>
			<AboutUs />
			<AboutUsGrid />
			<Environment />
		</>
	);
};

export default AboutUsPage;
