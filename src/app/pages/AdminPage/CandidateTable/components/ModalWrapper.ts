import styled from 'styled-components';
import { Grid as MaterialGrid } from '@material-ui/core';

const ModalWrapper = styled(MaterialGrid)`
	position: absolute;
	top: 300px;
	right: 200px;
	transform: translate(-50%, -50%);
	z-index: 2000;
	width: inherit;
	outline: 0;
`;
export default ModalWrapper;
