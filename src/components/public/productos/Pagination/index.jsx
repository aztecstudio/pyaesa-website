'use client';
import Link from 'next/link';
import styles from './Pagination.module.scss';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'react-feather';

export const Pagination = ({
	data,
	itemsPerPage,
	offSet,
	lastItemToDisplay,
}) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const sp = new URLSearchParams(searchParams);
	const currentPage = Number(searchParams.get('page')) || 1;
	const totalPages = Math.ceil(data.length / itemsPerPage);

	const createPageURL = newPage => {
		if (newPage >= 0 && newPage <= totalPages) {
			sp.set('page', newPage);
		}
		return `${pathname}?${sp.toString()}`;
	};

	return (
		<div className={styles.Container}>
			<Link
				className={`${styles.Link} ${currentPage === 1 ? styles.disabled : ''}`}
				href={createPageURL(currentPage - 1)}
				as={createPageURL(currentPage - 1)}
			>
				<ChevronLeft />
			</Link>
			<div className={styles.Labels}>
				<span>{data.length} resultados</span>
				<span>
					Mostrando del {offSet + 1} al {lastItemToDisplay}
				</span>
			</div>
			<Link
				className={`${styles.Link} ${currentPage === totalPages ? styles.disabled : ''}`}
				href={createPageURL(currentPage + 1)}
				as={createPageURL(currentPage + 1)}
			>
				<ChevronRight />
			</Link>
		</div>
	);
};
