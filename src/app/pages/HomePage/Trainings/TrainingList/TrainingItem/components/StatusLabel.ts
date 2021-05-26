import styled from 'styled-components';

const StatusLabel = styled.span<{ status: string }>`
	margin: 0;
	padding: 7px 11px;
	width: 48px;
	height: 24px;
	font-weight: 600;
	font-size: 12px;
	line-height: 10px;
	background-color: ${({ status }) =>
		status === 'Progress' ? 'orange' : 'palevioletred'};
	border-radius: 5px;
	color: #ffffff;
	text-transform: uppercase;
	border: none;
`;

export default StatusLabel;
