import { ProductCategories } from '@/components';
import { ProductsList } from '@/components/productos/ProductsList';
import { getCategories, getProducts } from '@/services';

const ProductsPage = async props => {
	const { categories } = props?.params;
	const productCats = await getCategories();
	let categoriesToShow = [];
	let currentCategory = {};
	let hasChildren = true;
	let products = [];

	if (categories?.length > 0) {
		const {
			id: parentId,
			children,
			name,
			description,
		} = productCats.find(
			category => category.handle === categories[categories.length - 1],
		);
		currentCategory = { name, description };
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
		<>
			{hasChildren ? (
				<ProductCategories
					categories={categoriesToShow}
					currentCategory={currentCategory}
					currentPath={categories?.join('/')}
				/>
			) : (
				<ProductsList products={products} currentCategory={currentCategory} />
			)}
		</>
	);
};

export default ProductsPage;
