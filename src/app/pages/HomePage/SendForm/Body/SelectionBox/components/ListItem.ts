import styled from 'styled-components';

interface ListItemProps {
	selected?: boolean;
}

const ListItem = styled.li<ListItemProps>`
	padding: 15px;

	color: #222222;
	${(props) =>
		props.selected &&
		`
		color: #0082ca;
		font-weight: 600;
		background-color: #f8f8f8;
		cursor: default;
	`}

	&:hover {
		background-color: #f8f8f8;
		cursor: ${(props) => (props.selected ? 'default' : 'pointer')};
	}
`;

export default ListItem;
