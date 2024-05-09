import Image from 'next/image';
import styles from './MainProducts.module.scss';
import Link from 'next/link';
import { getProducts } from '@/services/database';
import { getRandomProducts } from '@/utils/products';
import { unstable_cache } from 'next/cache';
import { NoData } from '@/components';

export const MainProducts = async () => {
	const products = await getProducts();
	const productsToDisplay = 4;
	let mainProducts;

	try {
		mainProducts = await unstable_cache(
			async () => {
				const data = getRandomProducts(products, productsToDisplay);
				return data;
			},
			undefined,
			{
				revalidate: 60 * 60 * 12,
			},
		)();
	} catch (error) {
		console.error(error);
	}

	return (
		<section>
			<h2>
				Productos <span>recomendados</span>
			</h2>
			{mainProducts?.length > 0 ? (
				<div className={styles.GridContainer}>
					{mainProducts.map(product => (
						<div
							key={`main-product-${product.id}`}
							className={styles.GridContainer__gridItem}
						>
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
					<div className={styles.GridContainer__goToProducts}>
						<Link href='/productos'>Ver productos</Link>
					</div>
				</div>
			) : (
				<NoData link={true} />
			)}
		</section>
	);
};
