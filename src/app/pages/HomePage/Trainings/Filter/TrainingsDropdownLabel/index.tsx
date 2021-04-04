import * as React from 'react';
import styled from 'styled-components';

const Text = styled.p`
	margin: 0 0 2px 15px;
`;
interface ITrainingsDropdownLabel {
	children: React.ReactNode;
	stateFilter: string;
}
export const TrainingsDropdownLabel: React.FunctionComponent<ITrainingsDropdownLabel> = ({
	children,
	stateFilter,
}) => (
	<React.Fragment>
		<label htmlFor="label1">
			<Text>{stateFilter}</Text>
			{children}
		</label>
	</React.Fragment>
);
