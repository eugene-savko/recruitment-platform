import { FilterContext } from 'app/context/FilterContext';
import React, { useContext } from 'react';
import { uid } from 'react-uid';
import { ListItem } from './ListItem';

export const InternshipList: React.FunctionComponent = () => {
	const filterContext = useContext(FilterContext);
	const dataList = [...filterContext.internshipList];
	return (
		<>
			{dataList.map((internship) => (
				<ListItem
					key={uid(internship.id)}
					course={internship.course}
					destination={internship.country}
					info={internship.info}
				/>
			))}
		</>
	);
};
