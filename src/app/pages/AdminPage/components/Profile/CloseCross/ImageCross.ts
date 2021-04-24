import styled from 'styled-components';

const ImageCross = styled.img`
	position: absolute;
	top: 2px;
	right: 2px;

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
