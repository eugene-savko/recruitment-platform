import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const FeedbackField = styled(TextField)`
	& > div {
		height: 100%;
	}
	flex-grow: 1;
	margin: 0 0 10px 10px;
`;

export default FeedbackField;
