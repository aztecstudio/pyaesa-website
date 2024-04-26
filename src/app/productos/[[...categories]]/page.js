import { ProductCategories } from '@/components';
import { ProductsList } from '@/components/productos/ProductsList';
import { filterCategoryData } from '@/helpers';
import { getProducts } from '@/services';

const ProductsPage = async props => {
	const { categories } = props?.params;
	const { categoriesToShow, currentCategory, hasChildren } =
		await filterCategoryData(categories);
	const products = hasChildren ? [] : await getProducts(currentCategory?.id);

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
