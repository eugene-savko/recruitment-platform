import { FilterContext } from 'app/context/FilterContext';
import React, { useContext } from 'react';
import { uid } from 'react-uid';
import InfiniteScroll from 'react-infinite-scroller';
import { OtherCourses } from './components/OtherCourses';
import { InternshipListWrappper } from './components/InternshipListWrapper';
import { ListItem } from './ListItem';

export const InternshipList: React.FunctionComponent = () => {
	const filterContext = useContext(FilterContext);
	const dataList = [...filterContext.internshipList];
	return (
		<>
			<InternshipListWrappper>
				<InfiniteScroll>
					{dataList.map((internship) => (
						<ListItem
							key={uid(internship.id)}
							course={internship.course}
							destination={internship.country}
							info={internship.info}
							status={internship.status}
						/>
					))}
					<OtherCourses>Загрузить больше предложений</OtherCourses>
				</InfiniteScroll>
			</InternshipListWrappper>
		</>
	);
};
