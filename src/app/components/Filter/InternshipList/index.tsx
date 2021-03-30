import { FilterContext } from 'app/context/FilterContext';
import React, { useContext, useEffect } from 'react';
import { uid } from 'react-uid';
import InfiniteScroll from 'react-infinite-scroller';
import { OtherCourses } from './components/OtherCourses';
import { InternshipListWrappper } from './components/InternshipListWrapper';
import { ListItem } from './ListItem';
import { dataInternshipList } from '../dataInternshipList';

export const InternshipList: React.FunctionComponent = () => {
	const filterContext = useContext(FilterContext);
	const dataList = [...filterContext.internshipList];

	function handleData(quantity: number) {
		const scrollData = dataInternshipList.slice(0, quantity);
		return scrollData;
	}
	return (
		<>
			<InternshipListWrappper>
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
					{dataList.map((internship) => (
						<ListItem
							key={uid(internship.id)}
							course={internship.course}
							destination={internship.country}
							info={internship.info}
							status={internship.status}
						/>
					))}
				</InfiniteScroll>
				<OtherCourses>Загрузить больше предложений</OtherCourses>
			</InternshipListWrappper>
		</>
	);
};
