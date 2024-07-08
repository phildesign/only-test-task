import { ContainerProps } from './Container.props';

import styles from './Container.module.scss';

const Container = ({ children }: ContainerProps): JSX.Element => {
	return <div className={styles.root}>{children}</div>;
};

export default Container;
