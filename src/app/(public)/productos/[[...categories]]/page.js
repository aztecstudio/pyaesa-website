import { ProductCategories, ProductsList } from '@/components';
import { ProductsNavbar } from '@/components/public/shared/ProductsNavbar';
import { filterCategoryData } from '@/helpers';
import { getProducts, searchProducts } from '@/services/firestore';

const ProductsPage = async props => {
	const { categories } = props?.params;
	const { search } = props?.searchParams;
	const { categoriesToShow, currentCategory, hasChildren } =
		await filterCategoryData(categories);
	let products = [];

	if (!hasChildren) {
		products = await getProducts(currentCategory?.id);
	} else if (search) {
		products = await searchProducts(search);
	}

	return (
		<>
			<ProductsNavbar categories={categories} products={products} />
			{hasChildren && !search ? (
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
