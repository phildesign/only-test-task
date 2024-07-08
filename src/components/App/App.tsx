import Container from '../Container/Container';
import TimePeriod from '../TimePeriod/TimePeriod';
import Htag from '../Htag/Htag';
import SliderDate from '../TimePeriod/SliderDate/SliderDate';

import styles from './App.module.scss';

const App = (): JSX.Element => {
	return (
		<div className={styles.app}>
			<Container>
				<TimePeriod>
					<Htag tag="h2" withBorder>
						Исторические <br /> даты
					</Htag>
					<SliderDate />
				</TimePeriod>
			</Container>
		</div>
	);
};

export default App;
