import Container from './components/Container/Container';

import styles from './App.module.scss';

const App = (): JSX.Element => {
	return (
		<div className={styles.app}>
			<Container></Container>
		</div>
	);
};

export default App;
