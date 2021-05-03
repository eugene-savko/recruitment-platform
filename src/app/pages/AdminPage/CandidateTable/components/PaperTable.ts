import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const PaperTable = styled(Paper)`
	padding: 0 20px;
	box-sizing: border-box;
	display: grid;
	grid-template: repeat(3, auto) / 95% 5%;
	width: 100%;
`;
export default PaperTable;
