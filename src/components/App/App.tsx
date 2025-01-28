import Container from '../Container/Container';

import styles from './App.module.scss';

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<Container></Container>
		</div>
	);
};

export default App;
