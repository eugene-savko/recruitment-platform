import styled from 'styled-components';

const ImageCross = styled.img`
	position: absolute;
	top: 5px;
	right: 5px;
	height: 20px;
	width: 20px;
	cursor: pointer;
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

export default ImageCross;
