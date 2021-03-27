import React from 'react';
import Link from '@material-ui/core/Link';

const nameLinks = ['Список тренингов', 'Про нас', 'Новости', 'FAQ'];
const listLinks = nameLinks.map((i) => (
	<Link href={i} title={i} variant="button">
		{i}
	</Link>
));

const NavLinks: React.FunctionComponent = () => <nav>{listLinks}</nav>;

export default NavLinks;
