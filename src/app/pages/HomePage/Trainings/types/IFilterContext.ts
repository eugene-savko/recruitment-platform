import React from 'react';
import ITrainingItem from './ITrainingItem';

interface ITrainingItems extends ITrainingItem {}
interface IFilterContext {
	trainings: Array<ITrainingItems>;
	setTrainings?: React.Dispatch<React.SetStateAction<Array<ITrainingItem>>>;
}
export type { IFilterContext };
