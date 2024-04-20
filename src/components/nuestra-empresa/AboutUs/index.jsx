import Image from 'next/image';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
	return (
		<section className={styles.AboutUs}>
			<h2 className={styles.AboutUs__title}>
				Acerca <span>de nosotros</span>
			</h2>
			<div className={styles.AboutUs__description}>
				<Image
					src={`/images/about-us.jpg`}
					alt={`Acerca de nosotros`}
					width={960}
					height={540}
					priority
				/>
				<p>
					Pinturas y Acabados Especiales es una empresa establecida en el estado
					de Coahuila en las ciudades de Saltillo y Ramos Arizpe, contamos con
					la confianza y respaldo para ser distribuidores exclusivos para la
					zona Sur Este del Estado de Coahuila de la marca Sherwin-Williams.
					Sherwin-Williams está orgullosa de ser la primera compañía de pinturas
					de Estados Unidos en recibir el registro ISO 9002 en nuestras
					instalaciones de fabricación de revestimientos, y la primera en
					Norteamérica en recibir el registro ISO 9001 en nuestros laboratorios.
					<br />
					<br />
					Cumplimos con los estándares más aceptados en el mundo de
					consistencia, contabilidad y valor que van desde las especificaciones
					de las materias primas hasta el envasado y entrega del producto. Sin
					importar que tipo de revestimiento necesite, puede estar seguro que,
					gracias a nuestros registros ISO 9000, los sistemas de calidad de
					Sherwin Williams satisfacen la aprobación universal.
				</p>
			</div>
		</section>
	);
};
