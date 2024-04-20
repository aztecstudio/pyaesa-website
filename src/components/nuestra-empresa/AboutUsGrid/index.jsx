import Image from 'next/image';
import styles from './AboutUsGrid.module.scss';

export const AboutUsGrid = () => {
	return (
		<section>
			<div className={styles.AboutUsGrid}>
				<div className={styles.AboutUsGrid__item}>
					<div className={styles.AboutUsGrid__item__img}>
						<p>Compromiso</p>
						<Image
							src={`/images/shw-compromiso.jpg`}
							alt={`Compromiso`}
							width={990}
							height={560}
							priority
						/>
					</div>
				</div>
				<div className={styles.AboutUsGrid__item}>
					<p className={styles.AboutUsGrid__item__text}>
						Sherwin-Williams tiene el compromiso de liderar también el
						posicionamiento en la mente de nuestros clientes. La Compañía
						siempre ha pensado que la satisfacción del cliente es la esencia de
						la calidad. Es por eso que vemos la calidad no sólo como un nivel de
						funcionamiento que hay que lograr, sino como un proceso de mejora
						que hay que realizar constantemente.
					</p>
				</div>
				<div className={styles.AboutUsGrid__item}>
					<div className={styles.AboutUsGrid__item__img}>
						<p>Misión</p>
						<Image
							src={`/images/shw-mision.jpg`}
							alt={`Misión`}
							width={990}
							height={560}
							priority
						/>
					</div>
				</div>
				<div className={styles.AboutUsGrid__item}>
					<p className={styles.AboutUsGrid__item__text}>
						Comercializar recubrimientos y servicios de calidad que sobrepasen
						las espectativas de los clientes, en cuanto a proteccion y
						decoracion de instalaciones arquitectonicas e industriales. Ser una
						empresa socialmente responsable, cuya gente proyecte conductas,
						creencias y valores que esten por arriba de lo esperado por nuestros
						clientes y entorno social promover de manera constante, el
						desarrollo de su personal en base a valores como honestidad,
						puntualidad y respeto, fomentando la actitud de servicio de calidad
						al cliente y deseos de superación.
					</p>
				</div>
			</div>
		</section>
	);
};
