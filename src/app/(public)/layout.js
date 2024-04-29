import { Footer, Header, Hero } from '@/components';
import styles from './PublicLayout.module.scss';

const PublicLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.Container}>
				<Hero />
				{children}
			</main>
			<Footer />
		</>
	);
};

export default PublicLayout;
