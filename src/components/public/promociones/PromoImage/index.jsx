import Image from 'next/image';
import styles from './PromoImage.module.scss';

export const PromoImage = ({ imageUrl }) => {
	return (
		<div className={styles.ImageContainer}>
			{imageUrl ? (
				<Image
					src={imageUrl}
					width={512}
					height={1690}
					alt='Imagén de promoción del mes'
					priority
				/>
			) : (
				<h3>¡No hay promociones para mostrar!</h3>
			)}
		</div>
	);
};
