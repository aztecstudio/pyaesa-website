import { ProductCategories, Products } from '@/components';
import { getCategories, getProducts } from '@/services';

const ProductsPage = async props => {
	const { categories } = props?.params;
	const { searchParams } = props;
	const productCats = await getCategories();
	let categoriesToShow = [];
	let hasChildren = true;
	let products = [];
	let product = '';

	if (categories?.length > 0) {
		const { id: parentId, children } = productCats.find(
			category => category.handle === categories[categories.length - 1],
		);
		categoriesToShow = productCats.filter(
			category => category.parent === parentId,
		);
		hasChildren = children.length > 0;
	} else {
		categoriesToShow = productCats.filter(category => category.parent === 0);
	}

	if (!hasChildren) {
		const { id: categoryId } = productCats.find(
			category => category.handle === categories[categories.length - 1],
		);
		products = await getProducts(categoryId);
	}

	if (searchParams?.product) {
		product = products.find(product => product.handle === searchParams.product);
	}

	return (
		<section>
			<h2>
				Descubre <span>todos nuestros productos</span>
			</h2>
			{hasChildren ? (
				<ProductCategories
					categories={categoriesToShow}
					currentPath={categories?.join('/')}
				/>
			) : (
				<Products
					products={products}
					currentPath={categories?.join('/')}
					product={product}
				/>
			)}
		</section>
	);
};

export default ProductsPage;
