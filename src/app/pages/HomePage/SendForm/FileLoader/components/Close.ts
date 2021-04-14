import styled from 'styled-components';
import { Close as CloseIcon } from '@material-ui/icons';

const Close = styled(CloseIcon)`
	width: 30px;
	height: 30px;
	color: #666;
	cursor: pointer;
	&:hover {
		color: #ee001e;
	}
`;

export default Close;
