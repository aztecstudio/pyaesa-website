'use client';
import { useContext } from 'react';
import styles from './Header.module.scss';
import { Menu } from 'react-feather';
import { Context } from '@/Context';
import { PAGES } from '@/components/consts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const Header = () => {
	const { isHidden, setIsHidden } = useContext(Context);
	const pathname = usePathname();

	const handleMenu = () => {
		setIsHidden(!isHidden);
	};

	return (
		<header className={styles.Header}>
			<nav className={styles.Header__navbar}>
				<div className={styles.Header__navbar__logo}>
					<Image
						src='/images/sw-logo-header.png'
						width={208}
						height={388}
						alt='Sherwin Williams logo'
					/>
				</div>
				<ul>
					{PAGES.map((item, i) => (
						<li key={`${item.label}-${i}`}>
							<Link
								href={item.pathname}
								className={pathname === item.pathname ? styles.linkActive : ''}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
				<button onClick={handleMenu}>
					<Menu />
				</button>
			</nav>
		</header>
	);
};
