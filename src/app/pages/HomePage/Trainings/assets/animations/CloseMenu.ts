import { keyframes } from 'styled-components';

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
export default closeMenu;
