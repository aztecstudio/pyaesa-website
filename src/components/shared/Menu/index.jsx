'use client';
import { useContext } from 'react';
import styles from './Menu.module.scss';
import { Context } from '@/Context';
import { Mail, MapPin, Phone } from 'react-feather';
import Link from 'next/link';
import { PAGES } from '@/components/consts';
import { usePathname } from 'next/navigation';

export const Menu = () => {
	const { isHidden, setIsHidden } = useContext(Context);
	const pathname = usePathname();

	return (
		<div className={`${styles.Menu} ${isHidden ? '' : styles.visible}`}>
			<section className={styles.Menu__containerList}>
				<ul>
					{PAGES.map((item, i) => (
						<li key={`${item.label}-${i}`}>
							<Link
								href={item.pathname}
								onClick={() => setIsHidden(true)}
								className={pathname === item.pathname ? styles.linkActive : ''}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</section>
			<div className={styles.Menu__divider}></div>
			<section className={styles.Menu__footer}>
				<div>
					<Phone size={20} />
					<span>(844)420-9500</span>
				</div>
				<div>
					<Mail size={20} />
					<span>contacto@pyaesa.com.mx</span>
				</div>
				<div>
					<MapPin size={20} />
					<span>
						Abasolo # 972 (Entre Corona y P. Agüero) Saltillo, Coahuila 25900,
						México
					</span>
				</div>
			</section>
		</div>
	);
};
