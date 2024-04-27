import { Breadcrumbs } from '../Breadcrumbs';
import { SearchForm } from '../SearchForm';
import styles from './ProductsNavbar.module.scss';

export const ProductsNavbar = ({ categories, products }) => {
	return (
		<div className={styles.Container}>
			<Breadcrumbs categories={categories} />
			<SearchForm>
				{products.length > 0 ? (
					<span>Mostrando {products.length} resultados</span>
				) : null}
			</SearchForm>
		</div>
	);
};
