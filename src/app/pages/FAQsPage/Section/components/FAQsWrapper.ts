import styled from 'styled-components';

export const FAQsWrapper = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;


	.faqs-title {
    display: flex;
    align-items: center;
    position: relative;
	}
  
  h1 {
    z-index: 1;
    width: 40%;
    line-height: 130%;
    font-size: 2rem;
    font-weight: 800;
    text-transform: capitalize;
  }
  
  .faqs-title_right {
    width: 100%;
		min-height: 400px;
    margin-bottom: 50px;
    background-image: url('https://exadel.com/wp-content/uploads/2020/11/faq.jpg');
    background-size: cover;
    background-position: center;

  }
	}
`;
