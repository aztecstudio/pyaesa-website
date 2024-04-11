'use client';
import { useContext } from 'react';
import styles from './Menu.module.scss';
import { Context } from '@/Context';
import { Mail, MapPin, Phone } from 'react-feather';
import Link from 'next/link';
import { PAGES } from '@/components/consts';

export const Menu = () => {
	const { isHidden, setIsHidden } = useContext(Context);

	return (
		<div className={`${styles.Menu} ${isHidden ? '' : styles.visible}`}>
			<section className={styles.Menu__containerList}>
				<ul>
					{PAGES.map((item, i) => (
						<li key={`${item.label}-${i}`}>
							<Link href={item.pathname} onClick={() => setIsHidden(true)}>
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
					<p>(844)420-9500</p>
				</div>
				<div>
					<Mail size={20} />
					<p>contacto@pyaesa.com.mx</p>
				</div>
				<div>
					<MapPin size={20} />
					<p>
						Abasolo # 972 (Entre Corona y P. Agüero) <br /> Saltillo, Coahuila{' '}
						<br />
						25900, México
					</p>
				</div>
			</section>
		</div>
	);
};
