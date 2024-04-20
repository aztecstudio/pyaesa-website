import Image from 'next/image';
import styles from './Environment.module.scss';

export const Environment = () => {
	return (
		<section className={styles.Environment}>
			<h3 className={styles.Environment__title}>
				Medio <span>ambiente y comunidad</span>
			</h3>
			<div className={styles.Environment__container}>
				<Image
					src={`/images/medio-ambiente.jpg`}
					alt={`Medio ambiente y comunidad`}
					width={990}
					height={560}
					priority
				/>
				<p>
					En Sherwin Williams estamos comprometidos a ser reconocidos como
					líderes en el desarrollo de productos sustentables, procesos e
					iniciativas que ayuden a preservar los recursos naturales, proteger el
					medio ambiente y contribuir a una mejora social.
					<br />
					<br />
					EcoVision es nuestro compromiso empresarial para encontrar y aplicar
					las formas de reducir nuestro impacto sobre el medio ambiente. Es una
					visión compartida y en curso que todos los empleados de Sherwin
					Williams ayudamos a alcanzar.
					<br />
					<br />
					De igual manera, estamos comprometidos a apoyar a las comunidades en
					las que vivimos y trabajamos. Estamos agradecidos de tener la
					oportunidad de apoyar a organizaciones que reflejan nuestra cultura de
					excelencia y servicio en algunas de las comunidades más vulnerables.
				</p>
			</div>
		</section>
	);
};
