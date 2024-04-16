import Image from 'next/image';
import styles from './Branches.module.scss';
import Link from 'next/link';

export const Branches = () => {
	return (
		<section className={styles.Branches}>
			<h2>Sucursales</h2>
			<div className={styles.Branches__card}>
				<div className={styles.Branches__description}>
					<p>
						¡Descubre nuestras sucursales y déjate sorprender por la variedad de
						pinturas, acabados y accesorios que tenemos para ofrecerte, todo en
						un mismo lugar!
					</p>
					<Link href='/sucursales'>Ver sucursales</Link>
				</div>
				<div className={styles.Branches__img}>
					<Image
						src='/images/location.png'
						width={320}
						height={182}
						alt='Cepillo de Alambre corto SW'
					/>
				</div>
			</div>
		</section>
	);
};
