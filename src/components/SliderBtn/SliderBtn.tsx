import clsx from 'clsx';
import { SliderBtnProps } from './SliderBtn.props';

import styles from './SliderBtn.module.scss';

const SliderBtn: React.FC<SliderBtnProps> = ({ variant, color, slidePrev, slideNext }) => {
	switch (variant) {
		case 'prev':
			return (
				<button
					className={clsx(styles.root, styles.prev, {
						[styles.white]: color === 'white',
					})}
					onClick={slidePrev}>
					<svg
						width="10"
						height="14"
						viewBox="0 0 10 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.icon}>
						<path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#9BA5B9" stroke-width="2" />
					</svg>
				</button>
			);
		case 'next':
			return (
				<button
					className={clsx(styles.root, styles.next, {
						[styles.white]: color === 'white',
					})}
					onClick={slideNext}>
					<svg
						width="10"
						height="14"
						viewBox="0 0 10 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.icon}>
						<path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#9BA5B9" stroke-width="2" />
					</svg>
				</button>
			);
		default:
			return <></>;
	}
};
export default SliderBtn;
