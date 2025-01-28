import Container from '../Container/Container';
import Htag from '../Htag/Htag';
import TimePeriod from '../TimePeriod/TimePeriod';

import styles from './App.module.scss';

const App: React.FC = () => {
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
