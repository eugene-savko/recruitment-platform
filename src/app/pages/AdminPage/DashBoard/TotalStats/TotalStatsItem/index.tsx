import React from 'react';
import Title from '../components/TotalStatsItem';

interface totalStatsItemProps {
	title: string;
	quantity: string;
}

export const TotalStatsItem: React.FunctionComponent<totalStatsItemProps> = ({
	title,
	quantity,
}) => {
	return (
		<Title>
			<p className="title">{title}: </p>
			<p className="quantity">{quantity}</p>
		</Title>
	);
};
