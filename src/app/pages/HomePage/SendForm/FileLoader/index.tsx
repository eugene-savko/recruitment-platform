import React from 'react';

import { AttachButton } from './AttachButton';
import { Input, Note } from '../components';
import { Error } from '../TraineeForm/components';
import {
	SelectedFile,
	ButtonFileLoaderWrapper,
	Label,
	FileSizeInfoWrapper,
	CloseSelectedFile,
} from './components';

import { IFileLoader } from '../types';

// 5MB = 5242880Bytes (binary)
const maxSizeFile = 5242880;

export const FileLoader: React.FunctionComponent<IFileLoader> = ({
	register,
	errors,
	setFileName,
	fileName,
}) => {
	// to force the value of the selected file
	function closeHandleClick() {
		const input = document.getElementById('attach-file') as HTMLInputElement;
		input.value = '';
		setFileName('');
	}

	// force the value of the selected file, if you close the selected file and add the same file again
	function handleInputClick(e: React.MouseEvent<HTMLInputElement>) {
		e.currentTarget.value = '';
		setFileName('');
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.files) {
			const { name }: { name: string } = e.target.files?.[0];
			setFileName(name);
		}
	}

	// File size validation
	function checkSize(fileList: FileList): boolean {
		const { name, size } = fileList[0];
		const allowedSize = size < maxSizeFile;

		setFileName(name);

		// return true or false
		return allowedSize;
	}

	// File extension validation
	function checkExtension(fileList: FileList): boolean {
		const { name } = fileList[0];
		const nameOfTheFile = name;
		const allowedExtensions = ['pdf', 'doc', 'docx'];
		const fileRegex = /^(?<nameFile>.+)\.(?<extension>.+)$/;
		const fileGroupsReg = fileRegex.exec(nameOfTheFile);
		const extension = fileGroupsReg?.groups?.extension || '';
		const allowedExtension = allowedExtensions.includes(extension);

		setFileName(name);

		// return true or false
		return allowedExtension;
	}

	return (
		<ButtonFileLoaderWrapper>
			<FileSizeInfoWrapper>
				<Label htmlFor="attach-file">
					<AttachButton />
					<Input
						type="file"
						id="attach-file"
						name="fileLoader"
						accept=".pdf,.doc,.docx"
						ref={register({
							required: 'Field is required',
							validate: {
								checkSize: (v: FileList) =>
									checkSize(v) || 'Size should be less then 5 MB',
								checkExtension: (v: FileList) =>
									checkExtension(v) ||
									'File extension should be: .doc, .docx or .pdf',
							},
						})}
						onChange={handleInputChange}
						onClick={handleInputClick}
					/>
				</Label>
				<Note size={14}>(Maximum file size 5MB; pdf, doc, docx)</Note>
			</FileSizeInfoWrapper>

			<SelectedFile>
				{fileName}
				{fileName ? <CloseSelectedFile onClick={closeHandleClick} /> : ''}
			</SelectedFile>
			{errors.fileLoader && <Error>{errors.fileLoader.message}</Error>}
		</ButtonFileLoaderWrapper>
	);
};
