import Image from 'next/image';
import styles from './ProductDetail.module.scss';
import { HtmlParser } from '@/components';

const ProductDetail = ({ product }) => {
	return (
		<div className={styles.Details}>
			<h3>{product.title}</h3>
			<div className={styles.Details__image}>
				<Image
					src={product.image}
					width={207}
					height={138}
					alt={product.title}
				/>
			</div>
			<HtmlParser content={product.content} />
		</div>
	);
};

export default ProductDetail;
