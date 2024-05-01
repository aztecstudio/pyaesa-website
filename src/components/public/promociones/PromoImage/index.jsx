import Image from 'next/image';
import styles from './PromoImage.module.scss';
import { getPromoImage } from '@/services/database';

export const PromoImage = async () => {
	const { imageUrl } = await getPromoImage();

	return (
		<div className={styles.ImageContainer}>
			{imageUrl ? (
				<Image
					src={imageUrl}
					width={512}
					height={1690}
					alt='Imagén de promoción del mes'
				/>
			) : null}
		</div>
	);
};
