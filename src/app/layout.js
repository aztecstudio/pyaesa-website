import { Montserrat } from 'next/font/google';
import '@/scss/globals.scss';
import { Toaster } from 'react-hot-toast';

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
				{children}
				<Toaster
					position='bottom-center'
					toastOptions={{
						className: 'toaster',
					}}
				/>
			</body>
		</html>
	);
}
