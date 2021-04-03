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
	course: string;
	destination: string;
	info: string;
	status: string;
}

export const TrainingItem: React.FunctionComponent<ITrainingItemProps> = ({
	course,
	destination,
	info,
	status,
}) => (
	<TrainingItemWrapper>
		<MainInfo>
			<Title>{course}</Title>
			<SubTitle>{destination}</SubTitle>
			<StatusLabel>{status}</StatusLabel>
		</MainInfo>
		<DescrtiptionInternship>{info}</DescrtiptionInternship>
		<Details>Подробнее</Details>
	</TrainingItemWrapper>
);
