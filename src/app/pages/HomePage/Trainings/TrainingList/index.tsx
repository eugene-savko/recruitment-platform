import React, { useContext, useEffect, useRef, useState } from 'react';
import { uid } from 'react-uid';

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
			{trainingsList.map(({ id, name, country, description, status }) => (
				<TrainingItem
					key={uid(id)}
					name={name}
					destination={country}
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
