import React, { useState } from 'react';
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
} from '@devexpress/dx-react-scheduler-material-ui';

import { schedulerData } from './helpers/schedulerData';
import { owners } from './helpers/owners';

const messages = {
	moreInformationLabel: '',
};

const TextEditor = (props: any) => {
	// eslint-disable-next-line react/destructuring-assignment
	if (props.type === 'multilineTextEditor') {
		return null;
	}
	return <AppointmentForm.TextEditor {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }: any) => {
	const onCustomFieldChange = (nextValue: any) => {
		onFieldChange({ customField: nextValue });
	};

	return (
		<AppointmentForm.BasicLayout
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			<AppointmentForm.Label text="Custom Field" type="titleLabel" />
			<AppointmentForm.TextEditor
				value={appointmentData.customField}
				onValueChange={onCustomFieldChange}
				placeholder="Custom field"
				readOnly={false}
				type="titleTextEditor"
			/>
		</AppointmentForm.BasicLayout>
	);
};

export const ScheduleRecruiter: React.FunctionComponent = () => {
	// eslint-disable-next-line prefer-const
	let [data, setData] = useState(schedulerData);

	const currentDate = new Date(2021, 5, 25, 9, 35);

	const commitChanges = ({ added, changed, deleted }: any) => {
		if (added) {
			const startingAddedId =
				data.length > 0 ? data[data.length - 1].id + 1 : 0;
			data = [...data, { id: startingAddedId, ...added }];
			setData(data);
		}
		if (changed) {
			data = data.map((appointment) =>
				changed[appointment.id]
					? { ...appointment, ...changed[appointment.id] }
					: appointment
			);
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
		</Paper>
	);
};
