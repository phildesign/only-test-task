import { TimePeriodProps } from './TimePeriod.props';

import styles from './TimePeriod.module.scss';

const TimePeriod: React.FC<TimePeriodProps> = ({ children }) => {
	return <div className={styles.root}>{children}</div>;
};

export default TimePeriod;
