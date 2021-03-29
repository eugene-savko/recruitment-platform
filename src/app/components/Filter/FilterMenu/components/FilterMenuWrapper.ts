import styled from 'styled-components';
import FilterBg from 'app/assets/img/filter-bg.svg';
import { Container } from '@material-ui/core';

export const FilterMenuWrapper = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${FilterBg}) 100% / contain no-repeat;
	margin: 0 auto;
	padding: 133px 74px 29px 161px;
`;
