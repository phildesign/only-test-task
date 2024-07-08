import Container from '../Container/Container';
import Htag from '../Htag/Htag';

import styles from './App.module.scss';

const App = (): JSX.Element => {
	return (
		<div className={styles.app}>
			<Container>
				<Htag tag="h2" withBorder>
					Исторические <br /> даты
				</Htag>
			</Container>
		</div>
	);
};

export default App;
