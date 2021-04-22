import styled from 'styled-components';

interface NoteProps {
	size: number;
}

const Note = styled.p<NoteProps>`
	display: inline;

	padding: 0;
	margin: 0 23px;

	font-family: 'Open Sans', sans-serif;
	font-size: ${(props) => props.size}px;
	font-weight: 300;
	line-height: ${(props) => props.size}px;

	color: #4e4e4e;
`;

export default Note;
