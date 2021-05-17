import styled from 'styled-components';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ImageArrow = styled(ArrowBackIcon)`
	position: absolute;
	top: 0;
	right: 0;
	height: 30px;
	width: 30px;
	cursor: pointer;
	color: #6b77a8;
	&:hover {
		transform: scale(0.8);
	}
	&:active {
		transform: scale(1);
	}
	&:focus {
		opacity: 0.8;
	}
`;

export default ImageArrow;
