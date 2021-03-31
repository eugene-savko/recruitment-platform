import React, { useContext } from 'react';
import { uid } from 'react-uid';
import InfiniteScroll from 'react-infinite-scroller';

import { FilterContext } from 'app/contexts/FilterContext';

import { OtherCourses, TrainingListWrappper } from './components';

import { TrainingItem } from './TrainingItem';
import { ITrainingItem } from '../types';

export const TrainingList: React.FunctionComponent = () => {
	const filterContext = useContext<Array<ITrainingItem>>(FilterContext);
	const internshipList = [...filterContext];

	return (
		<TrainingListWrappper>
			<InfiniteScroll
				loadMore={() => 10}
				pageStart={0}
				hasMore={true || false}
				loader={
					<div className="loader" key={0}>
						Loading ...
					</div>
				}
			>
				{internshipList.map((internshipItem) => (
					<TrainingItem
						key={uid(internshipItem.id)}
						course={internshipItem.course}
						destination={internshipItem.country}
						info={internshipItem.info}
						status={internshipItem.status}
					/>
				))}
			</InfiniteScroll>
			<OtherCourses>Загрузить больше предложений</OtherCourses>
		</TrainingListWrappper>
	);
};
