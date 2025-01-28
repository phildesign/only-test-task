import { Swiper, SwiperSlide } from 'swiper/react';
import Htag from '../Htag/Htag';
import Ptag from '../Ptag/Ptag';
import { SliderDateProps } from './SliderDate.props';

import 'swiper/css';
import styles from './SliderDate.module.scss';

const SliderDate: React.FC<SliderDateProps> = ({ data }) => {
	return (
		<div className={styles.root}>
			<Swiper spaceBetween={80} slidesPerView={3}>
				{data?.map((item) => {
					return (
						<SwiperSlide className={styles.slide} key={item.id}>
							<Htag tag="h3">{item.year}</Htag>
							<Ptag>{item.text}</Ptag>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default SliderDate;
