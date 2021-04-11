import styled from 'styled-components';

import ArrowDown from 'app/pages/HomePage/SendForm/assets/select-arrow-down.png';

const SelectedItem = styled.div`
	&::after {
		content: url(${ArrowDown});
	}

	display: inline-flex;
	justify-content: space-between;

	margin: 15px;
`;

export default SelectedItem;
