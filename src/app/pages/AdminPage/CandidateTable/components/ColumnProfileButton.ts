import { Button as MaterialButton } from '@material-ui/core';
import styled from 'styled-components';

const ColumnProfileButton = styled(MaterialButton)`
	text-decoration: none;
	color: #3f51b5;
	button {
		&:hover {
			background-color: #fff;
		}
	}
`;
export default ColumnProfileButton;
