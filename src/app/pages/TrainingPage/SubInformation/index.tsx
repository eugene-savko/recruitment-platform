import React from 'react';

import { Wrapper, Line, Strong, Label } from './components';

export const SubInformation: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<Line>
				<Strong>Course ID:</Strong>
				123
				<Label>HOT</Label>
			</Line>
			<Line>
				<Strong>Ukraine:</Strong>
				Kharkiv
			</Line>
			<Line>
				<Strong>Technical stack:</Strong>
				Java, JavaScript
			</Line>
		</Wrapper>
	);
};
