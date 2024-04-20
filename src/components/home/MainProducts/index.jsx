import Image from 'next/image';
import styles from './MainProducts.module.scss';
import Link from 'next/link';

export const MainProducts = () => {
	return (
		<section className={styles.MainProducts}>
			<h2>
				Productos <span>recomendados</span>
			</h2>
			<div className={styles.MainProducts__gridContainer}>
				<div className={styles.MainProducts__gridItem}>
					<p>Válvula EZTouch</p>
					<div className={styles.MainProducts__img}>
						<Image
							src='/images/valvula.png'
							width={207}
							height={138}
							alt='Válvula EZTouch'
						/>
					</div>
					<Link href='#'>Ver detalles</Link>
				</div>
				<div className={styles.MainProducts__gridItem}>
					<p>Aerosol Krylon para decorar</p>
					<div className={styles.MainProducts__img}>
						<Image
							src='/images/aerosol.png'
							width={207}
							height={138}
							alt='Aerosol Krylon'
						/>
					</div>
					<Link href='#'>Ver detalles</Link>
				</div>
				<div className={styles.MainProducts__gridItem}>
					<p>Maneral Elite SW</p>
					<div className={styles.MainProducts__img}>
						<Image
							src='/images/maneral-elite.png'
							width={207}
							height={138}
							alt='Maneral Elite SW'
						/>
					</div>
					<Link href='#'>Ver detalles</Link>
				</div>
				<div className={styles.MainProducts__gridItem}>
					<p>Cepillo de Alambre corto SW</p>
					<div className={styles.MainProducts__img}>
						<Image
							src='/images/cepillo-alambre-corto.png'
							width={207}
							height={138}
							alt='Cepillo de Alambre corto SW'
						/>
					</div>
					<Link href='#'>Ver detalles</Link>
				</div>
				<div className={styles.MainProducts__goToProducts}>
					<Link href='/productos'>Todos los productos</Link>
				</div>
			</div>
		</section>
	);
};
