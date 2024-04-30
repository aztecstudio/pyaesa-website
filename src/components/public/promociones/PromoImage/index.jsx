'use client';
import Image from 'next/image';
import styles from './PromoImage.module.scss';
import { useEffect, useState } from 'react';
import { getPromoImage } from '@/services/files';

export const PromoImage = () => {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		getPromoImage().then(promoImage => {
			setImageUrl(promoImage);
		});
	}, []);

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
