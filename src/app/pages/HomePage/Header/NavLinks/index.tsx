import React from 'react';
import LinkTheme from '../../../../components/Header/LinkTheme';

const nameLinks = ['Список тренингов', 'Про нас', 'Новости', 'FAQ'];
const listLinks = nameLinks.map((i) => (
	<LinkTheme href={i} title={i} variant="button">
		{i}
	</LinkTheme>
));

const NavLinks: React.FunctionComponent = () => <nav>{listLinks}</nav>;

export default NavLinks;
