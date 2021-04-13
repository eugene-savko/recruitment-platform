import styled, { css, keyframes } from 'styled-components';

interface IDropdownList {
	menuState: boolean | null;
}

const openMenu = keyframes`
  0% {
		height: 10px;
    opacity: 0;
  }

	50% {
		height: 200px;
    opacity: 50%;
  }
	100% {
		height: 350px;
    opacity: 1;
  }
`;

const closeMenu = keyframes`
	0% {
		height: 350px;
    opacity: 1;
  }
  50% {
		height: 200px;
    opacity: 0.5;
  }

	100% {
		height: 10px;
    opacity: 0;
  }
`;

const DropdownList = styled.ul`
	position: absolute;
	top: 100px;
	left: 15px;
	z-index: 20;
	margin: 0;
	border: 1px solid #e1e1e1;
	padding: 10px 20px 30px 40px;
	display: flex;
	opacity: 0;
	justify-content: space-between;
	flex-direction: column;
	width: 365px;
	max-height: 350px;
	animation: ${(props: IDropdownList) => {
		if (props.menuState) {
			return css`
				${openMenu} .5s ease-in
			`;
		}
		if (props.menuState === false) {
			return css`
				${closeMenu} .5s ease-out
			`;
		}
		return '';
	}};
	animation-fill-mode: forwards;
	overflow: hidden;
	background: #fff;
	border-radius: 24px;
`;
export default DropdownList;
