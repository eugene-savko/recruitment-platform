import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	margin: 22px 0;
	border: none;
	font-size: 16px;
	font-weight: 600;
	background-color: #fafafa;
	color: rgba(0, 130, 202, 1);
	&:focus {
		outline: none;
	}
`;
interface IOthersCourses {
	click: () => void;
}
const OtherCourses: FunctionComponent<IOthersCourses> = ({ click }) => (
	<Button type="button" onClick={() => click()}>
		Load more offers
	</Button>
);
export default OtherCourses;
