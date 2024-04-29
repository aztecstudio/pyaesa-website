import Image from 'next/image';
import Link from 'next/link';
import styles from './Overview.module.scss';

export const Overview = () => {
	return (
		<section className={styles.Overview}>
			<div className={styles.Overview__description}>
				<Image
					src={`/images/home-img.jpg`}
					alt={`Home`}
					width={990}
					height={560}
					priority
				/>
				<p>
					Es nuestro deseo que a través de la información aquí contenida, usted
					pueda conocer con mayor detalle nuestra Compañía, sus Productos y
					Servicios. Todos los que formamos parte de Sherwin Williams México,
					estamos absolutamente comprometidos en proporcionar a nuestros
					clientes productos y servicios de la más alta calidad.
				</p>
			</div>
			<Link className={styles.Overview__link} href='/nuestra-empresa'>
				Conoce más
			</Link>
		</section>
	);
};
