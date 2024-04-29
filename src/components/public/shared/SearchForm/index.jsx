'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './SearchForm.module.scss';
import { Search } from 'react-feather';

export const SearchForm = ({ children }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const sp = new URLSearchParams(searchParams);

	const handleSearch = value => {
		if (value.trim() === '') {
			sp.delete('search');
		} else {
			sp.set('search', value);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		router.push(`/productos?${sp.toString()}`);
	};

	return (
		<form className={styles.Form} onSubmit={handleSubmit}>
			<div className={styles.Form__inputSearch}>
				<input
					placeholder='Buscar productos...'
					onChange={e => handleSearch(e.target.value)}
					defaultValue={searchParams.get('search')?.toString()}
				/>
				<button>
					<Search size={20} />
				</button>
			</div>
			{children}
		</form>
	);
};
