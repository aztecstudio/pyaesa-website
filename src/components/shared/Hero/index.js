'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './Hero.module.scss';

export const Hero = () => {
	return (
		<section className={styles.Hero}>
			<Swiper
				modules={[Autoplay, EffectFade]}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
				}}
				effect={'fade'}
			>
				{[1, 2, 3, 4].map(slide => (
					<SwiperSlide key={`slide-${slide}`}>
						<Image
							src={`/images/slide-${slide}.jpg`}
							alt={`Slide-${slide} image`}
							width={1240}
							height={304}
							priority
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
