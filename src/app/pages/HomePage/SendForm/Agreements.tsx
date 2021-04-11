import React from 'react';

import {
	Label,
	Input,
	ContentAgreement,
	AgreementsWrapper,
} from './components';

export const Agreements: React.FunctionComponent = () => {
	return (
		<AgreementsWrapper>
			<Label>
				<Input type="checkbox" />
				<ContentAgreement>
					Подавая заявку на эту должность, я отправляю свои личные данные в
					Exadel и даю согласие на обработку личных данных с целью приема на
					работу.
				</ContentAgreement>
			</Label>
			<Label>
				<Input type="checkbox" />
				<ContentAgreement>
					Я понимаю и принимаю, что для оценки моей заявки, профессиональных
					навыков и опыта мои личные данные могут быть доступны внутригрупповым
					компаниям Exadel.
				</ContentAgreement>
			</Label>
		</AgreementsWrapper>
	);
};
