import styled from 'styled-components';

export const SectionWrapper = styled.section`
	padding: 20px 0 10px;
	border-top: 3px solid #e1e1e1;

	.faq__question {
		display: flex;
		align-items: center;
		font-weight: 700;
		position: relative;
		font-size: 18px;
		line-height: 120%;
		color: #0082ca;
		&_opened + .faq__answer {
			max-height: 300px;
		}
		&:hover {
			color: #40bfef;
			transition: 0.5s ease;
		}
	}

	.arrow {
		margin-left: auto;
		font-size: 30px;
	}

	.arrow_opened {
		transform: rotate(-180deg);
		transition: all 0.7s ease-in-out;
	}

	.faq__answer {
		color: #222;
		line-height: 180%;
		max-height: 0;
		margin: 0;
		padding-top: 10px;
		overflow: hidden;
		transition: max-height 0.7s ease-in-out;
	}
`;
