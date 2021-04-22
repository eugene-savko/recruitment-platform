import React from 'react';
import { Error } from './TraineeForm/components';
import { IAgreements } from './types';

import {
	Label,
	Input,
	ContentAgreement,
	AgreementsWrapper,
} from './components';

export const Agreements: React.FunctionComponent<IAgreements> = ({
	register,
	errors,
}) => {
	return (
		<AgreementsWrapper>
			<Label>
				<Input
					type="checkbox"
					name="checkboxDataProcessing"
					ref={register({ required: 'Field is required' })}
				/>
				<ContentAgreement>
					By applying for this position, I submit my personal data to the Exadel
					and give my consent for the processing of personal data for job
					recruitment purpose.
				</ContentAgreement>
			</Label>
			{errors.checkboxDataProcessing && (
				<Error>{errors.checkboxDataProcessing.message}</Error>
			)}

			<Label>
				<Input
					type="checkbox"
					name="checkboxDataTransfer"
					ref={register({ required: 'Field is required' })}
				/>
				<ContentAgreement>
					I understand and accept that for purpose of evaluation of my
					application, professional skills and experience my personal data may
					be accessible to the intra-group companies of Exadel.
				</ContentAgreement>
			</Label>
			{errors.checkboxDataTransfer && (
				<Error>{errors.checkboxDataTransfer.message}</Error>
			)}
		</AgreementsWrapper>
	);
};
