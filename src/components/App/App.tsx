import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../Container/Container';
import Htag from '../Htag/Htag';
import SliderDate from '../SliderDate/SliderDate';
import TimePeriod from '../TimePeriod/TimePeriod';
import { ISlides } from '../../interfaces/slides.interface';

import styles from './App.module.scss';

const App: React.FC = () => {
	const [data, setData] = useState<ISlides>({ data: [] });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios('https://63dbf3abc45e08a04351f659.mockapi.io/data');
				setData({ data: result.data });
			} catch (error) {
				console.error('Ошибка при получении данных:', error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className={styles.app}>
			<Container>
				<TimePeriod>
					<Htag tag="h2" withBorder>
						Исторические <br /> даты
					</Htag>
					<SliderDate {...data} />
				</TimePeriod>
			</Container>
		</div>
	);
};

export default App;
