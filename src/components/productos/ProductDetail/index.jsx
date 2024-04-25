import Image from 'next/image';
import { HtmlParser } from '@/components';
import Link from 'next/link';
import styles from './ProductDetail.module.scss';
import { getCategoryInfo } from '@/services';

const ProductDetail = async ({
	product: { title, image, content, product_cat: productCat },
}) => {
	const { name, catPathname } = await getCategoryInfo(productCat[0]);

	return (
		<div className={styles.Details}>
			<h3>{title}</h3>
			<Link
				href={`/productos/${catPathname}`}
				className={styles.Details__category}
			>
				{name}
			</Link>
			<div className={styles.Details__image}>
				<Image src={image} width={207} height={138} alt={title} />
			</div>
			<HtmlParser content={content} />
		</div>
	);
};

export default ProductDetail;
