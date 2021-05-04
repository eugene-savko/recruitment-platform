import React from 'react';
import {
	DetailsLink,
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
			<StatusLabel>{status && 'Hot'}</StatusLabel>
		</MainInfo>
		<DescrtiptionInternship>{info}</DescrtiptionInternship>
		<DetailsLink to="/training-page">
			<Details>Details</Details>
		</DetailsLink>
	</TrainingItemWrapper>
);
