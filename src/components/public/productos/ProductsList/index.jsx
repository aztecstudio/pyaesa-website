import Image from 'next/image';
import styles from './ProductsList.module.scss';
import Link from 'next/link';
import { Pagination } from '../Pagination';
import { NoData } from '@/components';

export const ProductsList = ({ products, currentCategory, currentPage }) => {
	const { name: categoryName, description } = currentCategory ?? {};

	const ITEMS_PER_PAGE = 6;
	const offSet = (Number(currentPage) - 1) * ITEMS_PER_PAGE;
	const lastItemToDisplay = Math.min(
		currentPage * ITEMS_PER_PAGE,
		products.length,
	);
	const paginatedProducts = products.slice(offSet, lastItemToDisplay);

	return (
		<section className={styles.Container}>
			<h2>
				<span>Productos</span>
			</h2>
			<h3>
				<span>{categoryName}</span>
			</h3>
			<p className={styles.categoryDescription}>{description}</p>
			{products.length > 0 ? (
				<div className={styles.Grid}>
					{paginatedProducts.map(product => (
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
					))}
				</div>
			) : (
				<NoData />
			)}
			{products.length > ITEMS_PER_PAGE ? (
				<Pagination
					data={products}
					itemsPerPage={ITEMS_PER_PAGE}
					offSet={offSet}
					lastItemToDisplay={lastItemToDisplay}
				/>
			) : null}
		</section>
	);
};
