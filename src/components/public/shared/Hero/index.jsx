'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { HERO_SLIDES } from '@/utils/consts';
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
				{HERO_SLIDES.map((slide, index) => (
					<SwiperSlide key={`slide-${index}`}>
						<Image
							src={slide}
							alt={`Slide-${index} image`}
							width={1750}
							height={562}
							priority
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
