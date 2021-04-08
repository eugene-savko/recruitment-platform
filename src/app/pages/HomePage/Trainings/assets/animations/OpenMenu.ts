import { keyframes } from 'styled-components';

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
export default openMenu;
