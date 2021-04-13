import styled from 'styled-components';

export const SectionWrapper = styled.section`
	padding: 15px 0;
	border-top: 3px solid #e1e1e1;
	padding: 20px 0 0;

	.faq__question {
		font-weight: 700;
		position: relative;
		padding-bottom: 10px;
		font-size: 18px;
		line-height: 120%;
		color: #0082ca;
		&_opened + .faq__answer {
			max-height: 300px;
		}
		&::after {
			content: '';
			display: block;
			color: #0082ca;
			width: 20px;
			height: 20px;
			background: url('https://exadel.com/wp-content/themes/exadel-redesign/images/arrow-blue-down.svg')
				no-repeat center;
			background-size: contain;
			top: 0;
			bottom: 0;
			margin: auto;
			right: 20px;
			position: absolute;
		}
		&:hover {
			color: #40bfef;
			transition: 0.5s ease;
		}
	}

	.faq__question_opened::after {
		transform: rotate(-180deg);
		transition: all 0.7s ease-in-out;
	}

	.faq__answer {
		color: #222;
		line-height: 180%;
		max-height: 0;
		margin: 0;
		overflow: hidden;
		transition: max-height 0.7s ease-in-out;
	}
`;
