import { PromoImage } from '@/components';
import { getPromoImage } from '@/services/files';

const PromosPage = async () => {
	const imageUrl = await getPromoImage();

	return (
		<section>
			<h2>
				Nuestras <span>promociones del mes</span>
			</h2>
			<PromoImage imageUrl={imageUrl} />
		</section>
	);
};

export default PromosPage;
