import React from 'react';

import { WrapperInfo, LinkOfFooter, CopyrightText } from './components';

const FooterInfo: React.FunctionComponent = () => (
	<React.Fragment>
		<WrapperInfo>
			<CopyrightText>© 2021</CopyrightText>
			<LinkOfFooter href="https://exadel.com/" target="_blank">
				Exadel, Inc.
			</LinkOfFooter>
		</WrapperInfo>
	</React.Fragment>
);

export default FooterInfo;
