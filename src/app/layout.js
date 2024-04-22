import { Montserrat } from 'next/font/google';
import '@/scss/globals.scss';
import { Header, Hero } from '@/components';
import { Footer } from '@/components/shared/Footer';

const montserrat = Montserrat({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Pinturas y Acabados Especiales S.A. de C.V.',
	description:
		'Aquí podrás encontrar todo lo que necesites sobre pinturas y acabados especiales en México',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Header />
				<main>
					<Hero />
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
