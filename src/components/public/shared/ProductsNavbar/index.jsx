'use client';
import { ArrowLeftCircle } from 'react-feather';
import { Breadcrumbs } from '../../../shared/Breadcrumbs';
import { SearchForm } from '../SearchForm';
import styles from './ProductsNavbar.module.scss';
import { useRouter } from 'next/navigation';

export const ProductsNavbar = ({ categories, products = undefined }) => {
	const router = useRouter();

	const handleBack = () => {
		const array = [...categories];
		array.pop();
		const pathname = array.join('/');
		router.push(`/productos/${pathname}`);
	};

	return (
		<div className={styles.Container}>
			{categories?.length > 0 ? (
				<ArrowLeftCircle onClick={handleBack} className={styles.backBtn} />
			) : null}
			<Breadcrumbs categories={categories} />
			{products ? (
				<SearchForm>
					{products.length > 0 ? (
						<span>Mostrando {products.length} resultados</span>
					) : null}
				</SearchForm>
			) : null}
		</div>
	);
};
