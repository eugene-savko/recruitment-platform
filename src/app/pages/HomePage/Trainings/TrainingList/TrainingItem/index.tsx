import { FrontendLandingContext } from 'app/contexts/FrontendLandingContext';
import { AppRoutePath } from 'app/route-paths';
import React, { useContext } from 'react';
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
	id: number;
}

export const TrainingItem: React.FunctionComponent<ITrainingItemProps> = ({
	name,
	destinations,
	info,
	status,
	id,
}) => {
	const { setInternshipValue } = useContext(FrontendLandingContext);

	return (
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
				<StatusLabel status={status}>{status}</StatusLabel>
			</MainInfo>
			<DescrtiptionInternship>{info}</DescrtiptionInternship>

			<DetailsLink to={status !== 'Over' ? AppRoutePath.TRAINING : '#'}>
				<Details
					onClick={() => {
						setInternshipValue?.(id);
					}}
				>
					Details
				</Details>
			</DetailsLink>
		</TrainingItemWrapper>
	);
};
