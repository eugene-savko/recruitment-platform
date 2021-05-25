import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';

const ListItemTextCustom = styled(ListItemText)`
	> span {
		font-size: 0.7rem;
		color: #6b77a8;
	}
	> p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 1rem;
		color: #6b77a8;
	}
	cursor: default;
`;

export default ListItemTextCustom;
