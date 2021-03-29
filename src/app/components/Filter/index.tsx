import { FilterContext } from 'app/context/FilterContext';
import React, { useContext, useEffect } from 'react';
import { dataInternshipList } from './dataInternshipList';
import { dataSelectedOptions } from './dataSelecledOptions';
import { FilterMenu } from './FilterMenu';
import { InternshipList } from './InternshipList';

export const Filter: React.FunctionComponent = () => {
	const filterContext = useContext(FilterContext);
	useEffect(() => {
		console.log(filterContext);
	}, []);
	const filteredInternshipList = dataInternshipList.filter((internship) => {
		switch (true) {
			case filterContext.specialization === 'Любая специальность':
				if (internship.country === filterContext.destination) {
					return true;
				}
				if (filterContext.destination === 'Все') {
					return true;
				}
				if (!filterContext.destination && !filterContext.specialization) {
					return true;
				}
				return false;

			case filterContext.destination === 'Все':
				if (internship.profession === filterContext.specialization) {
					return true;
				}
				return false;
			case internship.country === filterContext.destination &&
				internship.profession === filterContext.specialization:
				return true;
			case !filterContext.destination && !filterContext.specialization:
				return true;
			case internship.country !== filterContext.destination &&
				internship.profession !== filterContext.specialization:
				return false;
			case internship.country !== filterContext.destination ||
				internship.profession !== filterContext.specialization:
				return false;
			default:
				return true;
		}
	});
	return (
		<>
			<FilterContext.Provider
				value={{
					specialization: 'Любая специальность',
					destination: 'Беларусь',
					internshipList: filteredInternshipList,
				}}
			>
				<FilterMenu dataOptions={dataSelectedOptions} />
				<InternshipList />
			</FilterContext.Provider>
		</>
	);
};
