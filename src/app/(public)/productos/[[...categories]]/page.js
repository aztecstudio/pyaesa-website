import { ProductCategories, ProductsList } from '@/components';
import { ProductsNavbar } from '@/components/public/shared/ProductsNavbar';
import { filterCategoryData } from '@/helpers';
import { getProducts, searchProducts } from '@/services/database';

export async function generateMetadata({ params }) {
	const { categories } = params;
	const { currentCategory } = await filterCategoryData(categories);

	return {
		title: `PYAESA - ${!currentCategory?.name ? 'Nuestros productos' : currentCategory.name}`,
		description: currentCategory.description,
	};
}

const ProductsPage = async props => {
	const { categories } = props?.params;
	const search = props?.searchParams?.search || '';
	const page = props?.searchParams?.page || 1;
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
				<ProductsList
					products={products}
					currentCategory={currentCategory}
					currentPage={page}
				/>
			)}
		</>
	);
};

export default ProductsPage;
