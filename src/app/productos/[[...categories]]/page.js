import { ProductCategories, ProductsList } from '@/components';
import { getCategories, getProducts } from '@/services';

const ProductsPage = async props => {
	const { categories } = props?.params;
	const productCats = await getCategories();
	let categoriesToShow = [];
	let hasChildren = true;
	let products = [];

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
				<ProductsList products={products} />
			)}
		</section>
	);
};

export default ProductsPage;
