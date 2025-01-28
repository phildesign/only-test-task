import { ContainerProps } from './Container.props';

import styles from './Container.module.scss';

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className={styles.root}>{children}</div>;
};

export default Container;
