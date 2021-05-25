import React from 'react';

import { TextArea as StyledTextArea, TextAreaWrapper } from '../components';
import { ITextArea } from '../../types';

export const TextArea: React.FunctionComponent<ITextArea> = ({ register }) => {
	return (
		<TextAreaWrapper>
			<StyledTextArea
				name="textArea"
				placeholder="Other information"
				ref={register}
			/>
		</TextAreaWrapper>
	);
};
