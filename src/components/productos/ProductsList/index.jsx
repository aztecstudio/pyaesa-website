import Image from 'next/image';
import styles from './ProductsList.module.scss';
import Link from 'next/link';

export const ProductsList = ({ products, currentCategory }) => {
	const { name: categoryName, description } = currentCategory ?? {};

	return (
		<section className={styles.Container}>
			<h2>
				<span>Productos</span>
			</h2>
			<h3>
				<span>{categoryName}</span>
			</h3>
			<p className={styles.categoryDescription}>{description}</p>
			<div className={styles.Grid}>
				{products.length > 0
					? products.map(product => (
							<div key={`product-${product.id}`} className={styles.Grid__item}>
								<p>{product.title}</p>
								<Image
									src={product.image}
									width={207}
									height={138}
									alt={product.title}
								/>
								<Link href={`/producto/${product.handle}`}>Ver detalles</Link>
							</div>
						))
					: null}
			</div>
		</section>
	);
};
