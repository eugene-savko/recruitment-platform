import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const ProfileContainer = styled(Paper)`
	display: flex;
	flex-direction: row;

	width: 100%;
	height: calc(100vh - 11vh);

	padding: 10px;

	background: #fffafa;
`;

export default ProfileContainer;
