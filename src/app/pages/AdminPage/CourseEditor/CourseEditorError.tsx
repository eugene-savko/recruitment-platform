import React from 'react';

interface ICourseEditorError {
	nameInputElement: string;
	messageError: string;
}

export const CourseEditorError: React.FC<ICourseEditorError> = ({
	nameInputElement,
	messageError,
}: ICourseEditorError) => {
	return (
		<div>
			{nameInputElement && (
				<span style={{ color: 'red', fontSize: '12px' }}>{messageError}</span>
			)}
		</div>
	);
};
