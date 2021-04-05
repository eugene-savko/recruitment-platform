import styled from 'styled-components';

const MenuListLabel = styled.label`
	padding: 5px 0;
	line-height: 150%;
	&:before {
		content: '';
		display: inline-block;
		width: 16px;
		height: 16px;
		padding: 3px;
		vertical-align: middle;
		background: ${(props: { check: boolean }) =>
			props.check ? '#40bfef;' : ''};
		background-clip: content-box;
		border: 1px solid #c4c4c4;
		border-radius: 50%;
		margin-left: -1px;
		margin-right: 10px;
	}
`;

export default MenuListLabel;
