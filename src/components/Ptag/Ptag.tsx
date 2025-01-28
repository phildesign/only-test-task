import clsx from 'clsx';
import { PtagProps } from './Ptag.props';

import styles from './Ptag.module.scss';

const Ptag: React.FC<PtagProps> = ({ children, className }) => {
	return <p className={clsx(styles.root, className)}>{children}</p>;
};

export default Ptag;
