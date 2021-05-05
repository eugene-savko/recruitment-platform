import styled from 'styled-components';

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	max-width: 1032px;

	/* CSSTransition */

	&.show-form-transition-enter-active {
		opacity: 0;
	}

	&.show-form-transition-enter-done {
		opacity: 1;
		transition: 0.5s;
	}

	@media (max-width: 1047px) {
		max-width: 500px;
	}
`;
export default FormWrapper;
