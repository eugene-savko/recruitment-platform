import React, { useEffect, useState } from 'react';

// Context
import { FilterContext } from 'app/contexts/FilterContext';

// Smart component
import { Filter } from './Filter';
import { TrainingList } from './TrainingList';

// Data

import { ITrainingItem } from './types';
import API from './API';

export const Trainings: React.FunctionComponent = () => {
	const [trainingList, setTrainingList] = useState<Array<ITrainingItem>>([]);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await API.get(`internships/`);
			setTrainingList(data);
		};
		fetchData();
	}, []);
	return (
		<FilterContext.Provider
			value={{ trainings: trainingList, setTrainings: setTrainingList }}
		>
			<Filter />
			<TrainingList />
		</FilterContext.Provider>
	);
};
