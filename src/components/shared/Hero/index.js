'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { Autoplay } from 'swiper/modules';

export const Hero = () => {
	return (
		<section className={styles.Hero}>
			<Swiper
				modules={[Autoplay]}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
				}}
			>
				{[1, 2, 3, 4].map(slide => (
					<SwiperSlide key={`slide-${slide}`}>
						<div>
							<Image
								src={`/images/slide-${slide}.jpg`}
								alt={`Slide-${slide} image`}
								width={1240}
								height={304}
								priority
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
