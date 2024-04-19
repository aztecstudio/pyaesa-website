import { Mail, Map, MapPin, Phone } from 'react-feather';
import styles from './BranchesGrid.module.scss';
import branches from '../../branches.json';

export const BranchesGrid = () => {
	return (
		<div className={styles.BranchesGrid}>
			{branches?.length > 0
				? branches.map(branch => (
						<div key={branch.id} className={styles.BranchesGrid__item}>
							<div className={styles.BranchesGrid__item__title}>
								<h3>{branch.title}</h3>
							</div>
							<div className={styles.BranchesGrid__item__info}>
								<div className={styles.location}>
									<MapPin size={16} />
									<span>{branch.address}</span>
								</div>
								<div className={styles.phone}>
									<Phone size={16} />
									{branch.phones.join(' | ')}
								</div>
								<div className={styles.email}>
									<Mail size={16} />
									{branch.email}
								</div>
								<div className={styles.city}>
									<Map size={16} />
									{branch.city}
								</div>
							</div>
						</div>
					))
				: null}
		</div>
	);
};
