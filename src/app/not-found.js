import { Svg404 } from '@/components';
import styles from '@/scss/not-found.module.scss';
import Link from 'next/link';

const NotFound = () => {
	return (
		<main className={styles.Container}>
			<h2 className={styles.Title}>¡Página no encontrada!</h2>
			<Svg404 />
			<p className={styles.Text}>
				Si gustas puedes revisar los productos que ofrecemos
			</p>
			<Link className={styles.Link} href='/productos'>
				Ir a productos
			</Link>
		</main>
	);
};

export default NotFound;
