import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = ({ categories }) => {
	return categories?.length > 0 ? (
		<nav className={styles.Container} aria-label='breadcrumb'>
			<ul className={styles.List}>
				<li>
					<Link href='/productos' className={styles.Link}>
						PRODUCTOS
					</Link>
				</li>
				{categories.map((cat, i) => {
					const isActive = cat === categories[categories.length - 1];
					const pathname = isActive
						? '#'
						: i > 0
							? `${categories[0]}/${cat}`
							: `${categories[0]}`;

					return (
						<li key={`${cat}-${i}`}>
							<Link
								href={`${!isActive ? `/productos/${pathname}` : '#'}`}
								className={`${styles.Link} ${isActive ? styles.active : ''}`}
							>
								{cat.split('-').join(' ')}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	) : null;
};
