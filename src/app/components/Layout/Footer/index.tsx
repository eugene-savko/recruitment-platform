import React from 'react';

import SocialLinks from './SocialLinks';
import FooterInfo from './FooterInfo';

import WrapperFooter from './components/WrapperFooter';

import ISocialLinksItem from './types/ISocialLinksItem';

const SocialLinksData: Array<ISocialLinksItem> = [
	{ name: 'facebook', href: 'https://www.facebook.com/exadelinc/' },
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/company/exadel/',
	},
	{
		name: 'twitter',
		href: 'https://twitter.com/exadel',
	},
];

const Footer: React.FunctionComponent = () => (
	<React.Fragment>
		<WrapperFooter>
			<SocialLinks socialLinksItem={SocialLinksData} />
			<FooterInfo />
		</WrapperFooter>
	</React.Fragment>
);

export default Footer;
