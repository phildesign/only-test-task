import clsx from 'clsx';
import { HtagProps } from './Htag.props';

import styles from './Htag.module.scss';

const Htag: React.FC<HtagProps> = ({ tag, withBorder, children, className }) => {
	switch (tag) {
		case 'h1':
			return (
				<div
					className={clsx(styles.h1, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		case 'h2':
			return (
				<div
					className={clsx(styles.h2, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		case 'h3':
			return (
				<div
					className={clsx(styles.h3, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		case 'h4':
			return (
				<div
					className={clsx(styles.h4, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		case 'h5':
			return (
				<div
					className={clsx(styles.h5, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		default:
			return <></>;
	}
};
export default Htag;
