import Image from 'next/image';
import styles from './PromoImage.module.scss';
import { env } from '@/config/env';

export const PromoImage = async () => {
	const res = await fetch(`${env.HOST}/api/images`);
	const json = await res.json();
	const imageUrl = json.data;

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
