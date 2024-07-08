import Container from '../Container/Container';
import TimePeriod from '../TimePeriod/TimePeriod';
import Htag from '../Htag/Htag';

import styles from './App.module.scss';

const App = (): JSX.Element => {
	return (
		<div className={styles.app}>
			<Container>
				<TimePeriod>
					<Htag tag="h2" withBorder>
						Исторические <br /> даты
					</Htag>
				</TimePeriod>
			</Container>
		</div>
	);
};

export default App;
