import Image from 'next/image';
import styles from './PromoImage.module.scss';
import { getPromoImage } from '@/services/files';
import { unstable_cache } from 'next/cache';
import { NoData } from '@/components';

export const PromoImage = async () => {
	let imageUrl;

	try {
		imageUrl = await unstable_cache(
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
	} catch (error) {
		console.error(error);
	}

	return (
		<div className={styles.ImageContainer}>
			{imageUrl ? (
				<Image
					src={imageUrl}
					width={512}
					height={1690}
					alt='Imagén de promoción del mes'
				/>
			) : (
				<NoData item='promociones' />
			)}
		</div>
	);
};
