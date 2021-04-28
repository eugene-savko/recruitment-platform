import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
	EditingState,
	ViewState,
	GroupingState,
	IntegratedGrouping,
	IntegratedEditing,
	AppointmentModel,
	ChangeSet,
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
} from '@devexpress/dx-react-scheduler-material-ui';

import {
	unstable_createMuiStrictModeTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import { schedulerData } from './helpers/schedulerData';
import { owners } from './helpers/owners';
import { TextEditor } from './hoc/TextEditor';
import { BasicLayout } from './hoc/BasicLayout';

const messages = {
	moreInformationLabel: '',
};
const theme = unstable_createMuiStrictModeTheme();
export const ScheduleRecruiter: React.FunctionComponent = () => {
	// eslint-disable-next-line prefer-const
	let [data, setData] = useState<Array<AppointmentModel>>(schedulerData);

	const currentDate = new Date(2021, 5, 25, 9, 35);

	const commitChanges = ({ added, changed, deleted }: ChangeSet) => {
		if (added) {
			const idNum: number = data[data.length - 1].id as number;
			const startingAddedId = data.length > 0 ? idNum + 1 : 0;
			data = [
				...data,
				{
					id: startingAddedId,
					endDate: added.endDate,
					startDate: added.startDate,
					...added,
				},
			];
			setData(data);
		}
		if (changed) {
			data = data.map((appointment: AppointmentModel) => {
				if (appointment.id !== undefined) {
					return changed[appointment.id]
						? { ...appointment, ...changed[appointment.id] }
						: appointment;
				}
				return null;
			});
			setData(data);
		}
		if (deleted !== undefined) {
			data = data.filter((appointment) => appointment.id !== deleted);
			setData(data);
		}
	};

	const resources = [
		{
			fieldName: 'members',
			title: 'Members',
			instances: owners,
			allowMultiple: true,
		},
	];

	const grouping = [{ resourceName: 'members' }];

	return (
		<Paper>
			<ThemeProvider theme={theme}>
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
					<AppointmentTooltip showCloseButton showOpenButton />
					<AppointmentForm
						basicLayoutComponent={BasicLayout}
						textEditorComponent={TextEditor}
						messages={messages}
					/>

					<GroupingPanel />
					<DragDropProvider />
				</Scheduler>
			</ThemeProvider>
		</Paper>
	);
};
