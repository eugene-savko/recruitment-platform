import styled from 'styled-components';

export const FAQsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;

	.faqs-title {
    display: flex;
    align-items: center;
    position: relative;
	}
  
  .faqs-title__text {
    z-index: 1;
    width: 40%;
    line-height: 180%;
    font-size: 2rem;
    font-weight: 800;
    text-transform: capitalize;
  }
  
  .faqs-title__background {
    width: 100%;
		min-height: 400px;
    margin-bottom: 50px;
    background-image: url('https://exadel.com/wp-content/uploads/2020/11/faq.jpg');
    background-size: cover;
    background-position: center;
  }
	}
`;
