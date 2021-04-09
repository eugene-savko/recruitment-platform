import React, { useEffect, useState } from 'react';

// Context
import { FilterContext } from 'app/contexts/FilterContext';

// Smart components
import { Filter } from './Filter';
import { TrainingList } from './TrainingList';

// Data
import { TrainingItemsData } from './data';
import { ITrainingItem } from './types';
import API from './API';

export const Training: React.FunctionComponent = () => {
	const [trainingList, setTrainingList] = useState<Array<ITrainingItem>>(
		TrainingItemsData
	);
	useEffect(() => {
		const fetchData = async () => {
			const data = await API.get(`users/1/todos`);
			console.log(data);
		};
		fetchData();
	});
	return (
		<FilterContext.Provider
			value={{ trainings: trainingList, setTrainings: setTrainingList }}
		>
			<Filter />
			<TrainingList />
		</FilterContext.Provider>
	);
};
