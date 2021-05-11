import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
	EditingState,
	ViewState,
	GroupingState,
	IntegratedGrouping,
	IntegratedEditing,
	Resource,
	AppointmentForm as AppointmentFormBase,
	Grouping,
} from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	DayView,
	WeekView,
	Toolbar,
	ViewSwitcher,
	MonthView,
	Appointments,
	AppointmentTooltip,
	AppointmentForm,
	DateNavigator,
	TodayButton,
	Resources,
	GroupingPanel,
	ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import { fetchListRecruiters } from 'app/API/scheduleRecruiter';
import { TextEditor } from './hoc/TextEditor';
import { BasicLayout } from './hoc/BasicLayout';
import { useChangeEditingState } from './hooks/useChangeEditingState';
import { BooleanEditor } from './hoc/BooleanEditor';

export const ScheduleRecruiter: React.FunctionComponent = () => {
	const [useListRecruters, setUseListRecruiters] = useState([
		{
			text: 'No appointment',
			id: 1,
			color: 'indigo',
		},
	]);
	const { commitChanges, data } = useChangeEditingState(useListRecruters);

	useEffect(() => {
		const fetchData = async () => {
			const listRecruiter = await fetchListRecruiters();
			setUseListRecruiters(listRecruiter);
		};
		fetchData();
	}, []);

	const messages: AppointmentFormBase.LocalizationMessages = {
		moreInformationLabel: '',
		titleLabel: 'Name of candidate',
		detailsLabel: 'Name of candidate',
	};

	const resources: Array<Resource> = [
		{
			fieldName: 'members',
			title: 'Name of recruiter',
			allowMultiple: false,
			instances: useListRecruters,
		},
	];

	const grouping: Array<Grouping> = [{ resourceName: 'members' }];
	return (
		<Paper>
			<Scheduler data={data} height={850}>
				<ViewState defaultCurrentViewName="Week" />
				<EditingState onCommitChanges={commitChanges} />
				<GroupingState grouping={grouping} />

				<DayView startDayHour={10} endDayHour={18} />
				<WeekView excludedDays={[0]} startDayHour={10} endDayHour={18} />
				<MonthView />

				<Appointments />
				<Resources data={resources} mainResourceName="members" />
				<Toolbar />
				<ViewSwitcher />

				<IntegratedGrouping />
				<IntegratedEditing />

				<DateNavigator />
				<TodayButton />
				<AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
				<ConfirmationDialog />
				<AppointmentForm
					basicLayoutComponent={BasicLayout}
					textEditorComponent={TextEditor}
					booleanEditorComponent={BooleanEditor}
					messages={messages}
				/>

				<GroupingPanel />
			</Scheduler>
		</Paper>
	);
};
