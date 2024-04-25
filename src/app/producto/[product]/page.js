import ProductDetail from '@/components/productos/ProductDetail';
import { getProductByHandle } from '@/services';

const ProductPage = async props => {
	const { params } = props;
	const product = await getProductByHandle(params.product);

	return (
		<section>
			<ProductDetail product={product} />
		</section>
	);
};

export default ProductPage;
