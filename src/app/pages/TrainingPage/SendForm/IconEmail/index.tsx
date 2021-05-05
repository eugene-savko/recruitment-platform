import React from 'react';
import { Letter, Envelope, SvgIconEnvelope } from './components';

export const IconEmail: React.FunctionComponent = () => {
	return (
		<SvgIconEnvelope
			xmlns="http://www.w3.org/2000/svg"
			width="64.68421"
			height="64.12105"
			viewBox="0 0 206.68421 215.12105"
		>
			<title>IconMail</title>

			<Letter id="Letter">
				<polygon
					points="4.764 84.894 201.399 84.894 202.079 2.5 5.444 2.5 4.764 84.894"
					fill="#fafafa"
					stroke="#0082ca"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="5"
				/>
				<text
					transform="translate(19.80936 22.13662)"
					fontSize="10"
					fontFamily="MyriadPro-Regular, Myriad Pro"
				>
					<tspan letterSpacing="-0.071em">What is Lorem Ipsum?</tspan>
					<tspan x="4.25977" y="0">
						df
					</tspan>
				</text>
				<text
					transform="translate(93.51504 65.04941)"
					fontSize="6"
					fontFamily="MyriadPro-Regular, Myriad Pro"
				>
					<tspan xmlSpace="preserve">Lorem Ipsum is simply dummy text</tspan>
				</text>
			</Letter>
			<g id="Layer_1">
				<polyline
					points="4.684 85.679 4 211.121 202 211.121 202.684 85.679"
					fill="#fafafa"
					stroke="#0082ca"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="8"
				/>
			</g>
			<g id="Layer_2">
				<line
					x1="4.68421"
					y1="85.67895"
					x2="201.94211"
					y2="211.03158"
					fill="none"
					stroke="#0082ca"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="8"
				/>
				<line
					x1="4.20526"
					y1="210.97895"
					x2="202.55658"
					y2="85.77632"
					fill="none"
					stroke="#0082ca"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="8"
				/>
			</g>
			<Envelope id="Envelope">
				<polygon
					points="103.313 66.741 202.684 5.161 4.9 4.619 103.313 66.741"
					fill="#fafafa"
					stroke="#0082ca"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="8"
				/>
			</Envelope>
		</SvgIconEnvelope>
	);
};
