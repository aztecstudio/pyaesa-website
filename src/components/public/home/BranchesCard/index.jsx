import Image from 'next/image';
import styles from './BranchesCard.module.scss';
import Link from 'next/link';

export const BranchesCard = () => {
	return (
		<section>
			<h2>
				Nuestras <span>sucursales</span>
			</h2>
			<div className={styles.BranchesCard}>
				<div className={styles.BranchesCard__description}>
					<p>
						¡Descubre nuestras sucursales y déjate sorprender por la variedad de
						pinturas, acabados y accesorios que tenemos para ofrecerte, todo en
						un mismo lugar!
					</p>
					<Link href='/sucursales'>Ver sucursales</Link>
				</div>
				<div className={styles.BranchesCard__img}>
					<Image
						src='/images/location.png'
						width={640}
						height={364}
						alt='Simbolo de ubicación'
					/>
				</div>
			</div>
		</section>
	);
};
