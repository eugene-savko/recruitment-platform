import React from 'react';
import totalStatsData from '../data/totalStatsData';
import TotalStatsSection from './components/TotalStatsSection';
import { TotalStatsItem } from './TotalStatsItem';

export const TotalStats: React.FunctionComponent = () => {
	const totalStatsTransformed = totalStatsData.map(
		(statsData: totalStatsData) => {
			return (
				<TotalStatsItem
					key={statsData.title}
					title={statsData.title}
					quantity={statsData.quantity}
				/>
			);
		}
	);
	return (
		<React.Fragment>
			<TotalStatsSection>{totalStatsTransformed}</TotalStatsSection>
		</React.Fragment>
	);
};
