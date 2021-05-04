import styled from 'styled-components';

const ModalInfo = styled.div`
	position: relative;
	width: 100%;
	max-width: 800px;
	padding: 30px;
	margin: 0 40px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: justify;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;

	box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
		0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
	background-color: #fafafa;

	.email {
		font-size: 18px;
		color: #0082ca;
	}
`;

export default ModalInfo;
