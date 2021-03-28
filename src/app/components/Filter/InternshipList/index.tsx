import React from 'react';
import { uid } from 'react-uid';
import { ListItem } from './ListItem';
import { IInternshipListProps } from './types';

export const InternshipList: React.FunctionComponent<IInternshipListProps> = ({
	dataList,
	dataOption,
}) => (
	<>
		{dataList
			.filter((internship) => {
				switch (true) {
					case dataOption.specialization === 'Любая специальность':
						if (internship.country === dataOption.destination) {
							return true;
						}
						if (dataOption.destination === 'Все') {
							return true;
						}
						if (!dataOption.destination && !dataOption.specialization) {
							return true;
						}
						return false;

					case dataOption.destination === 'Все':
						if (internship.profession === dataOption.specialization) {
							return true;
						}
						return false;
					case internship.country === dataOption.destination &&
						internship.profession === dataOption.specialization:
						return true;
					case !dataOption.destination && !dataOption.specialization:
						return true;
					case internship.country !== dataOption.destination &&
						internship.profession !== dataOption.specialization:
						return false;
					case internship.country !== dataOption.destination ||
						internship.profession !== dataOption.specialization:
						return false;
					default:
						return true;
				}
			})
			.map((internship) => (
				<ListItem
					key={uid(internship.id)}
					course={internship.course}
					destination={internship.country}
					info={internship.info}
				/>
			))}
	</>
);
