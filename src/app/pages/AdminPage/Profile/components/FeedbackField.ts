import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const FeedbackField = styled(TextField)`
	& > div {
		height: 100%;
	}
	flex-grow: 1;
	margin: 0px 0px 10px 10px;
`;

export default FeedbackField;
