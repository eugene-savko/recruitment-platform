import React from 'react';
import { LinkWrapper } from './LinkWrapper';

type ArrowLinkProps = {
	arrow: boolean,
	children: string,
};

export const ArrowLink: React.FC<ArrowLinkProps> = ({ arrow, children }) => (
	<LinkWrapper arrow={arrow}>
		{children}
		<span className="arrow" />
	</LinkWrapper>
);
