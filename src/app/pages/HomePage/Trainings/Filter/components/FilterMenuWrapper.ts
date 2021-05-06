import styled from 'styled-components';
import FilterBg from 'app/assets/img/HomePage/Trainings/menu-filter_bg.png';

const FilterDropdownWrapper = styled.div`
	padding: 133px 76px 29px 75px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	background: url(${FilterBg});
	background-size: contain;
	background-position: bottom center;
	background-repeat: no-repeat;
`;

export default FilterDropdownWrapper;
