import React, { useState } from 'react';
import { X as Cross } from 'react-feather';
import { UploadFile } from './component/UploadFileStyle';
import { ButtonUp } from './component/ButtonStyled';
import { SizeExpansionFile } from './component/SizeExpansionFile';
import { UploadFileWrapper } from './component/UploadFileWrapper';
import { SelectedFile } from './component/SelectedFile';
import { OpenFile } from './component/OpenFile';

export default function UploadButtons() {
	const [fileName, setFileName] = useState('');

	function handleInputClick(e: React.MouseEvent<HTMLInputElement>) {
		e.currentTarget.value = '';
	}

	function handleCrossClick() {
		setFileName('');
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (!file) {
			setFileName('');
			return;
		}

		const { name, size } = file;

		if (size > 5242880) {
			setFileName('');
			return;
		}

		const allowedExtensions = ['pdf', 'doc', 'docx'];
		const fileRegex: RegExp = /^(?<nameFile>.+)\.(?<extension>.+)$/;
		const fileGroupsReg = fileRegex.exec(name);
		const extension = fileGroupsReg?.groups?.extension || '';
		const allowedExtension = allowedExtensions.includes(extension);
		if (!allowedExtension) {
			setFileName('');
			return;
		}

		setFileName(name);
	};

	return (
		<UploadFileWrapper>
			<UploadFile>
				<label htmlFor="fileSelection">
					<input
						id="fileSelection"
						accept=".pdf,.doc,.docx"
						type="file"
						style={{ display: 'none' }}
						onChange={handleInputChange}
						onClick={handleInputClick}
						required
					/>
					<ButtonUp>Attach a file *</ButtonUp>
				</label>
				<SizeExpansionFile>
					(max file size 5MB; pdf, doc, docx)
				</SizeExpansionFile>
			</UploadFile>
			<OpenFile>
				<SelectedFile> {fileName} </SelectedFile>

				{fileName !== '' ? (
					<Cross
						color="#666"
						onClick={handleCrossClick}
						style={{ cursor: 'pointer' }}
					/>
				) : (
					''
				)}
			</OpenFile>
		</UploadFileWrapper>
	);
}
