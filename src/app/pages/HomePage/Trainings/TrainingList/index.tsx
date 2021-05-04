import React, { useContext, useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { FilterContext } from 'app/contexts/FilterContext';

import { InternshipStatus } from 'customs/InternshipStatus';
import { LoadMoreInternship, TrainingListWrappper } from './components';

import { TrainingItem } from './TrainingItem';

export const TrainingList: React.FunctionComponent = () => {
	const { trainings, currentPage, setCurrentPage } = useContext(FilterContext);
	const [trainingsList, setTrainingsList] = useState(trainings);
	useEffect(() => {
		setTrainingsList(trainings.slice(0, currentPage * 5));
	}, [trainings, currentPage]);
	const load = () => {
		setCurrentPage?.((prev) => prev + 1);
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
