import { TimePeriodProps } from './TimePeriod.props';

import styles from './TimePeriod.module.scss';

const TimePeriod = ({ children }: TimePeriodProps): JSX.Element => {
	return <div className={styles.root}>{children}</div>;
};

export default TimePeriod;
