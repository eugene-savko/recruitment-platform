import React, { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FilterContext } from 'app/contexts/FilterContext';

import { LoadMoreInternship, TrainingListWrappper } from './components';

import { TrainingItem } from './TrainingItem';

export const TrainingList: React.FunctionComponent = () => {
	const { trainings } = useContext(FilterContext);
	const currentPage = useRef(1);
	const [trainingsList, setTrainingsList] = useState(trainings.slice(0, 5));

	useEffect(() => {
		setTrainingsList(trainings.slice(0, 5));
	}, [trainings]);

	const load = () => {
		if (trainings.length / 5 >= currentPage.current) {
			currentPage.current += 1;
		}
		const newArr = trainings.slice(0, currentPage.current * 5);
		setTrainingsList(newArr);
	};

	return (
		<TrainingListWrappper>
			{trainingsList.map(({ name, countries, description, status }) => (
				<TrainingItem
					key={uuidv4()}
					name={name}
					destination={countries[0].name}
					info={description}
					status={status}
				/>
			))}
			<LoadMoreInternship onClick={load}>
				Load more internship
			</LoadMoreInternship>
		</TrainingListWrappper>
	);
};
