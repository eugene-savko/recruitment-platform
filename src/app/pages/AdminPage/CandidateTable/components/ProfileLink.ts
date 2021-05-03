import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileLink = styled(Link)`
	text-decoration: none;
	button {
		&:hover {
			background-color: #fff;
		}
	}
`;
export default ProfileLink;
