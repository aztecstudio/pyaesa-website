'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu as IconMenu } from 'react-feather';
import { Menu } from '../Menu';
import { PAGES } from '@/components/consts';
import styles from './Header.module.scss';

export const Header = () => {
	const [isHidden, setIsHidden] = useState(true);
	const pathname = usePathname();

	const handleMenu = () => {
		setIsHidden(!isHidden);
	};

	return (
		<header className={styles.Header}>
			<Menu isHidden={isHidden} setIsHidden={setIsHidden} />
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
								as={item.pathname}
								className={pathname === item.pathname ? styles.linkActive : ''}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
				<button onClick={handleMenu}>
					<IconMenu />
				</button>
			</nav>
		</header>
	);
};
