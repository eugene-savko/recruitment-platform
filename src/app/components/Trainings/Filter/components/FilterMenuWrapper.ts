import styled from 'styled-components';
import FilterBg from 'app/assets/img/dropdown-bg.png';

const FilterMenuWrapper = styled.div`
	margin: 0 auto;
	padding: 133px 75px 29px 76px;
	min-height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${FilterBg});
	background-position: bottom center;
	background-repeat: no-repeat;
	margin-top: 0;
`;

export default FilterMenuWrapper;
