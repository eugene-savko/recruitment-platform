import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const ProfileContainer = styled(Paper)`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: calc(100vh - 12vh);
	padding: 15px;
	background: #fffafa;
`;

export default ProfileContainer;
