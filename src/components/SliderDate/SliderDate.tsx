import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Htag from '../Htag/Htag';
import Ptag from '../Ptag/Ptag';
import SliderBtn from '../SliderBtn/SliderBtn';
import { SliderDateProps } from './SliderDate.props';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './SliderDate.module.scss';

const SliderDate: React.FC<SliderDateProps> = ({ data }) => {
	const swiperRef = useRef<SwiperRef>(null);
	const handleSlidePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};
	const handleSlideNext = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};

	return (
		<div className={styles.root}>
			<Swiper
				spaceBetween={80}
				slidesPerView={3}
				modules={[Navigation]}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				ref={swiperRef}>
				{data?.map((item) => {
					return (
						<SwiperSlide className={styles.slide} key={item.id}>
							<Htag tag="h3">{item.year}</Htag>
							<Ptag>{item.text}</Ptag>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className={styles.sliderControls}>
				<SliderBtn
					className={styles.sliderBtnPrev}
					slidePrev={handleSlidePrev}
					variant="prev"
					color="white"
				/>
				<SliderBtn
					className={styles.sliderBtnNext}
					slideNext={handleSlideNext}
					variant="next"
					color="white"
				/>
			</div>
		</div>
	);
};

export default SliderDate;
