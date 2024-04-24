import ProductDetail from '../ProductDetail';
import { ProductsList } from '../ProductsList';

export const Products = ({ products, currentPath, product = '' }) => {
	return (
		<>
			{!product ? (
				<ProductsList products={products} currentPath={currentPath} />
			) : (
				<ProductDetail product={product} />
			)}
		</>
	);
};
