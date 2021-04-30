import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	EditingState,
	ViewState,
	GroupingState,
	IntegratedGrouping,
	IntegratedEditing,
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
	DragDropProvider,
	ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import { indigo, teal, purple } from '@material-ui/core/colors';
import { TextEditor } from './hoc/TextEditor';
import { BasicLayout } from './hoc/BasicLayout';
import { useChangeEditingState } from './hooks/useChangeEditingState';

export const ScheduleRecruiter: React.FunctionComponent = () => {
	const { commitChanges, data } = useChangeEditingState();

	const currentDate = new Date(2021, 5, 25, 9, 35);

	const messages = {
		moreInformationLabel: '',
		titleLabel: 'Name of candidate',
		detailsLabel: 'Name of candidate',
	};

	const resources = [
		{
			fieldName: 'members',
			title: 'Name of recruiter',
			instances: [
				{
					text: 'Ivan Graying',
					id: 1,
					color: indigo,
				},
				{
					text: 'Ann Reading',
					id: 2,
					color: teal,
				},
				{
					text: 'Kate Blacking',
					id: 3,
					color: purple,
				},
			],
			allowMultiple: true,
		},
	];

	const grouping = [{ resourceName: 'members' }];

	return (
		<Paper>
			<Scheduler data={data} height={850}>
				<ViewState
					defaultCurrentDate={currentDate}
					defaultCurrentViewName="Week"
				/>
				<EditingState onCommitChanges={commitChanges} />
				<GroupingState grouping={grouping} />

				<DayView startDayHour={10} endDayHour={18} />
				<WeekView startDayHour={10} endDayHour={18} />
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
					messages={messages}
				/>

				<GroupingPanel />
				<DragDropProvider />
			</Scheduler>
		</Paper>
	);
};
