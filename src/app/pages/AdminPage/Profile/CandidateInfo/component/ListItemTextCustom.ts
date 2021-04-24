import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';

const ListItemTextCustom = styled(ListItemText)`
	color: #6b77a8;
	border-bottom: 2px solid #6b77a8;
	&:hover {
		color: #000000;
		cursor: default;
	}
`;

export default ListItemTextCustom;
