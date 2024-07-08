import cn from 'classnames';
import { PtagProps } from './Ptag.props';

import styles from './Ptag.module.scss';

const Ptag = ({ children, className }: PtagProps): JSX.Element => {
	return <p className={cn(styles.root, className)}>{children}</p>;
};

export default Ptag;
