import styled from 'styled-components';

const List = styled.div`
	li {
		margin: 0;
		list-style: none;
		position: relative;
		&::before {
			content: '';
			background-color: blue;
			border-radius: 50%;
			width: 10px;
			height: 10px;
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			left: -16px;
		}
	}
`;

export default List;
