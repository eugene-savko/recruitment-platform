import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';

const ListItemTextCustom = styled(ListItemText)`
	color: #2196f3;
	border-bottom: 2px solid #2196f3;
	&:hover {
		color: #000000;
		cursor: default;
	}
`;

export default ListItemTextCustom;
