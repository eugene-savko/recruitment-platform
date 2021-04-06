import React, { useState } from 'react';

// Context
import { FilterContext } from 'app/contexts/FilterContext';

// Smart components
import { Filter } from './Filter';
import { TrainingList } from './TrainingList';

// Data
import { TrainingItemsData } from './data';
import { ITrainingItem } from './types';

export const Training: React.FunctionComponent = () => {
	const [trainingList, setTrainingList] = useState<Array<ITrainingItem>>(
		TrainingItemsData
	);
	return (
		<FilterContext.Provider
			value={{ trainings: trainingList, setTrainings: setTrainingList }}
		>
			<Filter />
			<TrainingList />
		</FilterContext.Provider>
	);
};
