import styled from 'styled-components';

const InternshipsComponent = styled.table`
	width: 84%;
	margin: 50px auto;
  border: 1px solid #d9dddc;
  border-radius: 10px;
	border-collapse: collapse;

	.trainee-number th {
		width: 150px;
		padding: 5px 0;
		font-weight: 400;
		font-size: 12px;
	}
	td, th {
		padding: 10px 0;
	} 
	td {
		border-top: 1px solid #d9dddc;
		text-align: center;
	}
	.internship-name: {
		text-align: left;
	}
	.status {
		width 100px;
		background: linear-gradient(to top, transparent 25%, #e50f0f 25% 75%, transparent 75% 100%);
		color: white;
	}
	.details {
		color: blue;
	}
	.details: hover {
		cursor: pointer;
	}
`;

export default InternshipsComponent;
