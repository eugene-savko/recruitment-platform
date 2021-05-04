import React, { useEffect, useState } from 'react';

// Context
import { FilterContext } from 'app/contexts/FilterContext';

// Smart component
import { Filter } from './Filter';
import { TrainingList } from './TrainingList';

// Data

import { ITrainingItem } from './types';
import { fetchInternships } from './API/interships';

export const Trainings: React.FunctionComponent = () => {
	const [trainings, setTrainings] = useState<Array<ITrainingItem>>([]);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchInternships();
			setTrainings(data);
		};
		fetchData();
	}, []);
	return (
		<FilterContext.Provider
			value={{ trainings, setTrainings, currentPage, setCurrentPage }}
		>
			<Filter />
			<TrainingList />
		</FilterContext.Provider>
	);
};
