import React from 'react';

import { ListItemProps } from './types';
import { ListItemWrapper } from './components/ListItemWrapper';
import { MainInfo } from './components/MainInfo';
import { Details } from './components/Details';
import { DescriptionInternship } from './components/DescrtiptionInternship';
import { TypographyH4 } from './components/TypographyH4';
import { TypographyH2 } from './components/TypographyH2';
import { StatusButton } from './components/StatusButton';

export const ListItem: React.FunctionComponent<ListItemProps> = ({
	course,
	destination,
	info,
	status,
}) => (
	<>
		<ListItemWrapper>
			<MainInfo>
				<TypographyH2>{course}</TypographyH2>
				<TypographyH4>{destination}</TypographyH4>
				<StatusButton>{status}</StatusButton>
			</MainInfo>
			<DescriptionInternship>{info}</DescriptionInternship>
			<Details>Подробнее</Details>
		</ListItemWrapper>
	</>
);
