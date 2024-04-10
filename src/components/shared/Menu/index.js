'use client';
import { useContext } from 'react';
import styles from './Menu.module.scss';
import { Context } from '@/Context';
import { Mail, MapPin, Phone } from 'react-feather';

export const Menu = () => {
	const { isHidden } = useContext(Context);

	return (
		<div className={`${styles.Menu} ${isHidden ? '' : styles.visible}`}>
			<section className={styles.Menu__containerList}>
				<ul>
					<li>
						<a href='#'>Inicio</a>
					</li>
					<li>
						<a href='#'>Nuestra Empresa</a>
					</li>
					<li>
						<a href='#'>Productos</a>
					</li>
					<li>
						<a href='#'>Promociones</a>
					</li>
					<li>
						<a href='#'>Sucursales</a>
					</li>
					<li>
						<a href='#'>Contacto</a>
					</li>
				</ul>
			</section>
			<div className={styles.Menu__divider}></div>
			<section className={styles.Menu__footer}>
				<div>
					<Phone size={20} />
					<p>Teléfono: (844)420-9500</p>
				</div>
				<div>
					<Mail size={20} />
					<p>Email: contacto@pyaesa.com.mx</p>
				</div>
				<div>
					<MapPin size={20} />
					<p>
						Dirección: Abasolo # 972 (Entre Corona y P. Agüero) <br /> Saltillo,
						Coahuila <br />
						25900, México
					</p>
				</div>
			</section>
		</div>
	);
};
