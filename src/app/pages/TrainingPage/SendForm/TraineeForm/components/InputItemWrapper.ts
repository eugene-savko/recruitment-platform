import styled from 'styled-components';

const InputItemWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	width: 100%;
	margin: 0 auto;

	@media (max-width: 1047px) {
		justify-content: center;
	}
`;
export default InputItemWrapper;
