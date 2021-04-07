import * as React from 'react';
import styled from 'styled-components';

const Text = styled.p`
	margin: 0 0 2px 15px;
`;
interface IDropdownMenuLabel {
	children: React.ReactNode;
	stateFilter: string;
}

const DropdownMenuLabel: React.FunctionComponent<IDropdownMenuLabel> = ({
	children,
	stateFilter,
}) => (
	<label htmlFor="label1">
		<Text>{stateFilter}</Text>
		{children}
	</label>
);
export default DropdownMenuLabel;
