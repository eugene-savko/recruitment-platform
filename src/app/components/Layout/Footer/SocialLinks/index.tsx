import React from 'react';

import ISocialLinksItem from '../types/ISocialLinksItem';

interface ISocialLinksProps {
	socialLinksItem: Array<ISocialLinksItem>;
}

const SocialLinks: React.FunctionComponent<ISocialLinksProps> = ({
	socialLinksItem,
}) => (
	<React.Fragment>
		<ul>
			{socialLinksItem?.map((item) => (
				<li key={item.name}>
					<a href={item.href}>{item.name}</a>
				</li>
			))}
		</ul>
	</React.Fragment>
);

export default SocialLinks;
