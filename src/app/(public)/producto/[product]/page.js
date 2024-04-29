import { Breadcrumbs, ProductDetail } from '@/components';
import { getCategoryInfo, getProductByHandle } from '@/services/database';

const ProductPage = async props => {
	const { params } = props;
	const product = await getProductByHandle(params.product);
	const { product_cat: productCat } = product;
	const categoryInfo = await getCategoryInfo(productCat[0]);
	const categories = categoryInfo?.catPathname.split('/');

	return (
		<>
			<Breadcrumbs categories={[...categories, product.title]} />
			<section>
				<ProductDetail product={product} categoryInfo={categoryInfo} />
			</section>
		</>
	);
};

export default ProductPage;
