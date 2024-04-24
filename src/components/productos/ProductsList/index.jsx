import Image from 'next/image';
import styles from './ProductsList.module.scss';
import Link from 'next/link';

export const ProductsList = ({ products }) => {
	return (
		<div className={styles.GridContainer}>
			{products.length > 0
				? products.map(product => {
						return (
							<div
								key={`product-${product.id}`}
								className={styles.GridContainer__gridItem}
							>
								<p>{product.title}</p>
								<Image
									src={product.image}
									width={207}
									height={138}
									alt={product.title}
								/>
								<Link href='#'>Ver detalles</Link>
							</div>
						);
					})
				: null}
		</div>
	);
};
