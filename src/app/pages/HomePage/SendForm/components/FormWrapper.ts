import styled from 'styled-components';

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	max-width: 1032px;

	@media (max-width: 1047px) {
		max-width: 500px;
	}
`;
export default FormWrapper;
