import React, { useState } from 'react';

import { AttachButton } from './AttachButton';
import { Input, Note } from '../components';
import { Error } from '../Body/components';
import {
	SelectedFile,
	Wrapper,
	Label,
	FileSizeInfoWrapper,
	Close,
} from './components';

import { IFileLoader } from '../types';

// 5MB = 5242880Bytes
const sizeFile = 5242880;

export const FileLoader: React.FunctionComponent<IFileLoader> = ({
	register,
	errors,
}) => {
	const [fileName, setFileName] = useState('');

	function handleInputClick(e: React.MouseEvent<HTMLInputElement>) {
		e.currentTarget.value = '';
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];

		if (file) {
			setFileName(file.name);
		} else {
			setFileName('');
		}
	}

	function checkSize(fileList: FileList): boolean {
		const allowedSize = fileList[0].size < sizeFile;

		if (allowedSize) {
			setFileName(fileList[0].name);
			return true;
		}

		setFileName('');
		return false;
	}

	function checkExtension(fileList: FileList): boolean {
		const nameOfTheFile = fileList?.[0]?.name;
		const allowedExtensions = ['pdf', 'doc', 'docx'];
		const fileRegex = /^(?<nameFile>.+)\.(?<extension>.+)$/;
		const fileGroupsReg = fileRegex.exec(nameOfTheFile);
		const extension = fileGroupsReg?.groups?.extension || '';
		const allowedExtension = allowedExtensions.includes(extension);

		if (allowedExtension) {
			setFileName(fileList[0].name);
			return true;
		}

		setFileName('');
		return false;
	}

	return (
		<Wrapper>
			<FileSizeInfoWrapper>
				<Label htmlFor="attach-file">
					<AttachButton />
					<Input
						type="file"
						id="attach-file"
						name="fileLoader"
						ref={register({
							required: 'Field is required',
							validate: {
								checkSize: (v: FileList) =>
									checkSize(v) || 'Size should be less then 5 MB',
								checkExtension: (v: FileList) =>
									checkExtension(v) ||
									'File extension should be .doc, .docx or .pdf',
							},
						})}
						onChange={handleInputChange}
						onClick={handleInputClick}
					/>
				</Label>
				<Note size={14}>(Maximum file size 5MB; pdf, doc, docx)</Note>
			</FileSizeInfoWrapper>

			<SelectedFile>
				{fileName !== '' ? fileName : ''}
				{fileName !== '' ? <Close onClick={() => setFileName('')} /> : ''}
			</SelectedFile>
			{errors.fileLoader && <Error>{errors.fileLoader.message}</Error>}
		</Wrapper>
	);
};
