import React from 'react';
import { LinkWrapper } from './LinkWrapper';

type ArrowLinkProps = {
	linkUrl: string | undefined,
	children: string,
};

export const ArrowLink: React.FC<ArrowLinkProps> = ({ linkUrl, children }) => (
	<LinkWrapper className="arrow" href={linkUrl}>
		{children}
		<span className="anim-arrow">
			<span className="anim-arrow__shaft" />
		</span>
	</LinkWrapper>
);
