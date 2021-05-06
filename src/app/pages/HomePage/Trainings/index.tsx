import React, { useEffect, useState } from 'react';

// Context
import { FilterContext } from 'app/contexts/FilterContext';

// Smart component
import { fetchInternships } from 'app/API/interships';
import { INTERNSHIPS_DATA } from 'app/API/data/INTERNSHIPS_DATA';
import { Filter } from './Filter';
import { TrainingList } from './TrainingList';

// Data

import { ITrainingItem } from './types';

export const Trainings: React.FunctionComponent = () => {
	const [trainings, setTrainings] = useState<Array<ITrainingItem>>([]);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchInternships();
				setTrainings?.(data);
			} catch (e) {
				setTrainings?.(INTERNSHIPS_DATA);
			}
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
