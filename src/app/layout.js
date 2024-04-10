import { Montserrat } from 'next/font/google';
import '@/scss/globals.scss';
import { Header, Menu } from '@/components';
import ContextProvider from '@/Context';

const montserrat = Montserrat({
	weight: ['300', '500', '700'],
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
				<ContextProvider>
					<Header />
					<Menu />
				</ContextProvider>
				{children}
			</body>
		</html>
	);
}
