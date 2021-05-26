import React from 'react';

import { Delimiter, Wrapper } from './components';
import { Social } from './Social';

export const Share: React.FunctionComponent = () => {
	return (
		<Wrapper>
			Share
			<Delimiter />
			<Social />
		</Wrapper>
	);
};
