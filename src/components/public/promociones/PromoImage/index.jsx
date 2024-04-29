import Image from 'next/image';
import styles from './PromoImage.module.scss';
import { getPromoImage } from '@/services/files';

export const PromoImage = async () => {
	const promoImage = await getPromoImage();

	return (
		<div className={styles.ImageContainer}>
			<Image
				src={promoImage}
				width={512}
				height={1690}
				alt='Imagén de promoción del mes'
				priority
			/>
		</div>
	);
};
