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

interface IDestinations {
	id: number;
	name: string;
}
interface ITrainingItemProps {
	name: string;
	destinations: Array<IDestinations>;
	info: string;
	status: string;
}

export const TrainingItem: React.FunctionComponent<ITrainingItemProps> = ({
	name,
	destinations,
	info,
	status,
}) => (
	<TrainingItemWrapper>
		<MainInfo>
			<Title>{name}</Title>
			<SubTitle>
				{destinations.map((elem, index) =>
					index === destinations.length - 1 ? (
						<strong key={elem.id}>{elem.name}</strong>
					) : (
						<strong key={elem.id}>{elem.name}, </strong>
					)
				)}
			</SubTitle>
			<StatusLabel>{status}</StatusLabel>
		</MainInfo>
		<DescrtiptionInternship>{info}</DescrtiptionInternship>
		<DetailsLink to="/training-page">
			<Details>Details</Details>
		</DetailsLink>
	</TrainingItemWrapper>
);
