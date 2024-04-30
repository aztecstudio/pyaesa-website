'use client';
import Image from 'next/image';
import styles from './PromoImage.module.scss';
import { useEffect, useState } from 'react';

export const PromoImage = () => {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		fetch('/api/images')
			.then(res => res.json())
			.then(json => {
				setImageUrl(json.data);
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
			) : (
				<h3>¡No hay promociones para mostrar!</h3>
			)}
		</div>
	);
};
