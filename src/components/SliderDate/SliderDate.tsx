import { Swiper, SwiperSlide } from 'swiper/react';
import Htag from '../Htag/Htag';
import Ptag from '../Ptag/Ptag';

import 'swiper/css';
import styles from './SliderDate.module.scss';

const SliderDate: React.FC = () => {
	return (
		<div className={styles.root}>
			<Swiper spaceBetween={80} slidesPerView={3}>
				<SwiperSlide className={styles.slide}>
					<Htag tag="h3">2015</Htag>
					<Ptag>
						13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
					</Ptag>
				</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SliderDate;
