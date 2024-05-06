import { PromoImage } from '@/components';

export const metadata = {
	title: 'PYAESA - Promociones del mes',
	description: 'Descubre aquí nuestras promociones del mes',
};

const PromosPage = () => {
	return (
		<section>
			<h2>
				Nuestras <span>promociones del mes</span>
			</h2>
			<PromoImage />
		</section>
	);
};

export default PromosPage;
