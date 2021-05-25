import styled from 'styled-components';

type SectionWrapperProps = {
	background: string;
};

export const SectionWrapper = styled.section<SectionWrapperProps>`
	background-image: url(${(props) => props.background});
	width: 100%;
	max-width: 1000px;
	min-height: 300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 16px;
	white-space: pre-line;
	background-repeat: no-repeat;
	background-position: right top;
	margin-bottom: 60px;
	padding-top: 20px;
	line-height: 180%;
	& > * {
		width: 60%;
	}
	& + .leftAside {
		background-position: left;
		align-items: flex-end;
	}
	&:first-of-type {
		margin-top: 94px;
	}
`;
