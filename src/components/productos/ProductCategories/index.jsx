import Image from 'next/image';
import styles from './ProductCategories.module.scss';
import { DYNAMIC_IDS } from '@/components/consts';
import Link from 'next/link';

export const ProductCategories = ({ categories, currentPath = '' }) => {
	return (
		<div className={styles.Grid}>
			{categories?.length > 0
				? categories.map(category => {
						const { id, name, handle, image } = category;
						const dynamicId = DYNAMIC_IDS[handle] || '';
						const path = `/productos/${currentPath}/${handle}`;

						return (
							<Link
								key={`cat-${id}`}
								href={path}
								className={styles.Grid__item}
								id={styles[dynamicId]}
							>
								<p>{name}</p>
								<Image
									src={image}
									alt={name}
									width={990}
									height={560}
									priority
								/>
							</Link>
						);
					})
				: null}
		</div>
	);
};
