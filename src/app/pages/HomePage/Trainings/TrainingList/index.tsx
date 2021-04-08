import React, { useContext, useEffect, useState } from 'react';
import { uid } from 'react-uid';

import { FilterContext } from 'app/contexts/FilterContext';

import { TrainingListWrappper } from './components';

import { TrainingItem } from './TrainingItem';
import OtherCourses from './OtherCourses';

export const TrainingList: React.FunctionComponent = () => {
	const { trainings } = useContext(FilterContext);
	const [currentPage, setCurrentPage] = useState<number>(2);
	const [trainingsList, setTrainingsList] = useState(trainings.slice(0, 5));

	useEffect(() => {
		setCurrentPage(2);
		setTrainingsList(trainings.slice(0, 5));
	}, [trainings]);

	const load = () => {
		if (trainings.length / 5 >= currentPage) {
			setCurrentPage(currentPage + 1);
		}

		const newArr = trainings.slice(0, currentPage * 5);
		setTrainingsList(newArr);
	};

	return (
		<TrainingListWrappper>
			{trainingsList.map((internshipItem) => (
				<TrainingItem
					key={uid(internshipItem.id)}
					course={internshipItem.course}
					destination={internshipItem.country}
					info={internshipItem.info}
					status={internshipItem.status}
				/>
			))}
			<OtherCourses click={load} />
		</TrainingListWrappper>
	);
};
