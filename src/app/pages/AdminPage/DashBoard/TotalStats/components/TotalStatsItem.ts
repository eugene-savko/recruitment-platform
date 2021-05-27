import styled from 'styled-components';

const TotalStatsItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding: 20px;
	width: 270px;
	font-size: 16px;
	font-weight: bold;
	color: #09090a;
	border: 1px solid #d9dddc;
	border-radius: 10px;

	.title,
	.quantity {
		margin: 0;
	}

	.quantity {
		font-size: 24px;
	}
`;

export default TotalStatsItem;
