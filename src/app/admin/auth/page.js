import { LoginForm } from '@/components';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
	return (
		<section className={styles.Container}>
			<LoginForm />
		</section>
	);
};

export default LoginPage;
