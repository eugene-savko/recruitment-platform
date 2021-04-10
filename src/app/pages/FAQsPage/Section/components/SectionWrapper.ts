import styled from 'styled-components';

export const SectionWrapper = styled.section`
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 15px 0;

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
		&:hover {
			color: #40bfef;
			transition: 0.7s ease;
		}
		&::after {
			content: '';
			display: block;
			width: 20px;
			height: 20px;
			background: url('https://exadel.com/wp-content/themes/exadel-redesign/images/arrow-blue-down-light.svg')
				no-repeat center;
			background-size: contain;
			top: 0;
			bottom: 0;
			margin: auto;
			right: 20px;
			position: absolute;
		}
	}
	.faq__answer {
		color: #222;
		line-height: 180%;
		max-height: 0;
		margin: 0;
		overflow: hidden;
		transition: max-height 0.7s ease-in-out;
	}
	.faqs-title {
		background-image: url('https://exadel.com/wp-content/uploads/2020/11/faq.jpg');
	}
`;
