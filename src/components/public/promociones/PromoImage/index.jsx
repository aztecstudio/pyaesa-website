import Image from 'next/image';
import styles from './PromoImage.module.scss';
import { getPromoImage } from '@/services/files';
import { unstable_cache } from 'next/cache';

export const PromoImage = async () => {
	const imageUrl = await unstable_cache(
		async () => {
			const image = await getPromoImage();
			return image;
		},
		undefined,
		{
			tags: ['promo_image'],
			revalidate: false,
		},
	)();

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
