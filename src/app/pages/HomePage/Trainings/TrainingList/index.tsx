import React, { useContext, useEffect, useState } from 'react';

import { FilterContext } from 'app/contexts/FilterContext';

import { INTERNSHIP_STATUS } from 'app/data/INTERNSHIPS_STATUS';

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
			{trainingsList.map(({ name, countries, description, status, id }) => (
				<TrainingItem
					key={id}
					id={id}
					name={name}
					destinations={countries}
					info={description}
					status={INTERNSHIP_STATUS[`${status}`]}
				/>
			))}
			<LoadMoreInternship onClick={load}>
				Load more internship
			</LoadMoreInternship>
		</TrainingListWrappper>
	);
};
