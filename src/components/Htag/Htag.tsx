import cn from 'classnames';
import { HtagProps } from './Htag.props';

import styles from './Htag.module.scss';

const Htag = ({ tag, withBorder, children, className }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return (
				<div
					className={cn(styles.h1, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		case 'h2':
			return (
				<div
					className={cn(styles.h2, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		case 'h3':
			return (
				<div
					className={cn(styles.h3, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		case 'h4':
			return (
				<div
					className={cn(styles.h4, className, {
						[styles.withBorder]: withBorder,
					})}>
					{children}
				</div>
			);
		case 'h5':
			return (
				<div
					className={cn(styles.h5, className, {
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
