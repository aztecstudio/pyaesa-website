import Image from 'next/image';
import styles from './MainProducts.module.scss';
import Link from 'next/link';
import { getProducts } from '@/services/firestore';

export const MainProducts = async () => {
	const products = await getProducts();
	const mainProducts = products.slice(1, 5);

	return (
		<section>
			<h2>
				Productos <span>recomendados</span>
			</h2>
			<div className={styles.GridContainer}>
				{mainProducts.length > 0
					? mainProducts.map(product => (
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
						))
					: null}
				<div className={styles.GridContainer__goToProducts}>
					<Link href='/productos'>Ver productos</Link>
				</div>
			</div>
		</section>
	);
};
