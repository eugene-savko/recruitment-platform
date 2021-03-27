import styled from 'styled-components';
import Link from '@material-ui/core/Link';

const LinkTheme = styled(Link)`
	margin: 30px;
	font-weight: bold;
	text-transform: none;
	color: #222222;

	&:hover {
		text-decoration: none;
		color: #0082ca;
	}
`;

export default LinkTheme;
