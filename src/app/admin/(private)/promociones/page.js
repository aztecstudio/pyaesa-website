import { InputFile } from '@/components';
import styles from './PromosPage.module.scss';

const PromosPage = () => {
	return (
		<section className={styles.Container}>
			<h2>
				<span>Administrar promociones</span>
			</h2>
			<p>Subir imágen de promociones del mes:</p>
			<InputFile />
		</section>
	);
};

export default PromosPage;
