import React from 'react';
import styled from 'styled-components';

interface ITrainingsMenuItem {
	value: string;
	id: number;
	check: boolean;
	click: Function;
	inputCheckboxChange: Function;
}

const b = '#40bfef;';
const Input = styled.input`
	display: none;
`;
const Label = styled.label`
	padding: 5px 0;
	line-height: 150%;
	&:before {
		content: '';
		display: inline-block;
		width: 16px;
		height: 16px;
		padding: 3px;
		vertical-align: middle;
		background: ${(props: { check: boolean }) => (props.check ? b : '')};
		background-clip: content-box;
		border: 1px solid #c4c4c4;
		border-radius: 50%;
		margin-left: -1px;
		margin-right: 10px;
	}
`;
export const TrainingsMenuItem: React.FunctionComponent<ITrainingsMenuItem> = ({
	value,
	id,
	check,
	inputCheckboxChange,
	click,
}) => (
	<React.Fragment>
		<Label htmlFor={`way-${value}-${id}`} check={check}>
			<Input
				type="checkbox"
				value={value}
				id={`way-${value}-${id}`}
				onChange={(event) => inputCheckboxChange(event)}
				onClick={() => click(value)}
				checked={check}
			/>
			{value}
		</Label>
	</React.Fragment>
);
