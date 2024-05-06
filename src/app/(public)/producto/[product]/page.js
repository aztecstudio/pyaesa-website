import { ProductDetail } from '@/components';
import { ProductsNavbar } from '@/components/public/shared/ProductsNavbar';
import { getCategoryInfo, getProductByHandle } from '@/services/database';

export async function generateMetadata({ params }) {
	const product = await getProductByHandle(params.product);

	return {
		title: `PYAESA - ${product.title}`,
		description: product.excerpt,
	};
}

const ProductPage = async props => {
	const { params } = props;
	const product = await getProductByHandle(params.product);
	const { product_cat: productCat } = product;
	const categoryInfo = await getCategoryInfo(productCat[0]);
	const categories = categoryInfo?.catPathname.split('/');

	return (
		<>
			<ProductsNavbar categories={[...categories, product.title]} />
			<section>
				<ProductDetail product={product} categoryInfo={categoryInfo} />
			</section>
		</>
	);
};

export default ProductPage;
