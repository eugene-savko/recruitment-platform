import React, { useContext, useEffect } from 'react';
import { uid } from 'react-uid';
import InfiniteScroll from 'react-infinite-scroller';

import { FilterContext } from 'app/contexts/FilterContext';

import { OtherCourses, TrainingListWrappper } from './components';

import { TrainingItem } from './TrainingItem';

export const TrainingList: React.FunctionComponent = () => {
	const { trainings } = useContext(FilterContext);

	return (
		<TrainingListWrappper>
			<InfiniteScroll loadMore={() => 10} pageStart={0} hasMore={true || false}>
				{trainings.map((internshipItem) => (
					<TrainingItem
						key={uid(internshipItem.id)}
						course={internshipItem.course}
						destination={internshipItem.country}
						info={internshipItem.info}
						status={internshipItem.status}
					/>
				))}
			</InfiniteScroll>

			<OtherCourses>Load more offers</OtherCourses>
		</TrainingListWrappper>
	);
};
