import React from 'react';

import {
	TrainingItemWrapper,
	MainInfo,
	Details,
	DescrtiptionInternship,
	Title,
	SubTitle,
	StatusLabel,
} from './components';

interface ITrainingItemProps {
	name: string;
	destination: string;
	info: string;
	status: string;
}

export const TrainingItem: React.FunctionComponent<ITrainingItemProps> = ({
	name,
	destination,
	info,
	status,
}) => (
	<TrainingItemWrapper>
		<MainInfo>
			<Title>{name}</Title>
			<SubTitle>{destination}</SubTitle>
			<StatusLabel>{status}</StatusLabel>
		</MainInfo>
		<DescrtiptionInternship>{info}</DescrtiptionInternship>
		<Details>Details</Details>
	</TrainingItemWrapper>
);
