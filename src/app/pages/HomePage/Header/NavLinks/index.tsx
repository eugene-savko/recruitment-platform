import React from 'react';
import Link from '@material-ui/core/Link';

const NavLinks: React.FunctionComponent = () => (
	<>
		<nav>
			<Link variant="button" color="textPrimary" href="news">
				News
			</Link>
		</nav>
	</>
);

export default NavLinks;
