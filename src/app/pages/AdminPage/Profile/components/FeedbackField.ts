import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const FeedbackField = styled(TextField)`
	& > div {
		height: 100%;
	}
	width: 80%;
	margin: 10px;
`;

export default FeedbackField;
