import styled from 'styled-components';

const DropdownListLabel = styled.label`
	padding: 5px 0;
	line-height: 150%;
	&:before {
		margin-left: -1px;
		margin-right: 10px;
		padding: 3px;
		border: 1px solid #c4c4c4;
		border-radius: 50%;
		content: '';
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: middle;
		background: ${(props: { check: boolean }) =>
			props.check ? '#40bfef;' : ''};
		background-clip: content-box;
	}
`;

export default DropdownListLabel;
