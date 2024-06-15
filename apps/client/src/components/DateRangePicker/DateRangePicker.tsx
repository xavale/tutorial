/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/Button/Button';
import { ArrowRightIcon } from '@/components/Icon/ArrowRight';
import { CalendarIcon } from '@/components/Icon/CalendarIcon';
import { CloseIcon } from '@/components/Icon/CloseIcon';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/Icon/Icon';
import { IconButton } from '@/components/IconButton/IconButton';
import { PopoverInput } from '@/components/PopoverInput/PopoverInput';
import clsx from 'clsx';
import { addMonths, format, parseISO, subMonths } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState } from 'react';
import styles from './DateRangePicker.css';

const DATE_FORMAT_FULL_DATE = "d 'de' MMMM 'de' yyyy";
const DATE_FORMAT_MONTH_YEAR = 'MMMM yyyy';
const DATE_FORMAT_SHORT_DATE = 'd MMM yyyy';
const DATE_FORMAT_STRING = 'yyyy-MM-dd';

export interface DateRange {
	start: string | undefined;
	end: string | undefined;
}

export interface DateRangePickerPopoverProps {
	value: DateRange | undefined;
	label: [string, string];
	onChange?: (range: DateRange) => void;
	onPopoverClose?: () => void;
}

export interface DateRangePickerProps {
	placeholder: string;
	label: [string, string];
	onChange: (range: DateRange) => void;
}

const getDateFromString = (dateString: string): Date => {
	return parseISO(dateString);
};

const getDateFromComponents = (year: number, month: number, day: number): Date => {
	const paddedMonth = String(month).padStart(2, '0');
	const paddedDay = String(day).padStart(2, '0');
	const dateString = `${year}-${paddedMonth}-${paddedDay}`;
	return getDateFromString(dateString);
};

const getDateFromDate = (date: Date): Date => {
	const year = date.getFullYear();
	const paddedMonth = String(date.getMonth() + 1).padStart(2, '0');
	const paddedDay = String(date.getDate()).padStart(2, '0');
	const dateString = `${year}-${paddedMonth}-${paddedDay}`;

	return getDateFromString(dateString);
};

const getMonthFromDate = (date: Date): { year: number; month: number } => {
	return {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
	};
};

const getNextMonth = (currentMonth: { year: number; month: number }, next: boolean): { year: number; month: number } => {
	const date = getDateFromComponents(currentMonth.year, currentMonth.month, 1);
	const relativeMonth = next ? addMonths(date, 1) : subMonths(date, 1);

	return getMonthFromDate(relativeMonth);
};

const isValidDate = (date: Date): boolean => {
	return date instanceof Date && !isNaN(date as unknown as number);
};

const formatDate = (date: Date, formatString: string): string => {
	if (isValidDate(date)) {
		return format(date, formatString, { locale: es });
	}

	return '';
};

const isDateInThePast = (date: Date): boolean => {
	const currentDate = getDateFromDate(new Date());

	if (date < currentDate) {
		return true;
	}

	return false;
};

const getMonthCalendar = (year: number, month: number, range?: DateRange): any => {
	const daysInMonth = new Date(year, month, 0).getDate();
	const days = [];

	for (let day = 1; day <= daysInMonth; day++) {
		const date = getDateFromComponents(year, month, day);
		const value = formatDate(date, DATE_FORMAT_STRING);
		days.push({
			value,
			label: day,
			disabled: isDateInThePast(date),
			selected: value === range?.start || value === range?.end,
			inRange: range?.start && value > range?.start && range?.end && value < range?.end,
			startRange: range?.start && range?.end && value === range?.start && value !== range?.end,
			endRange: range?.start && range?.end && value !== range?.start && value === range?.end,
		});
	}

	const monthDate = new Date(year, month - 1, 1);
	monthDate.setHours(10, 0, 0, 0);

	return {
		label: format(monthDate, DATE_FORMAT_MONTH_YEAR, { locale: es }),
		year,
		month,
		days,
	};
};

const getDateRangeLabel = (dateRange: DateRange): string | undefined => {
	if (!dateRange.start || !dateRange.end) {
		return undefined;
	}

	return `${formatDate(getDateFromString(dateRange.start), DATE_FORMAT_SHORT_DATE)} - ${formatDate(getDateFromString(dateRange.end), DATE_FORMAT_SHORT_DATE)}`;
};

const allowSubMonth = (month: { year: number; month: number }): boolean => {
	const currentMonth = getMonthFromDate(getDateFromDate(new Date()));

	if (month.year < currentMonth.year || (month.year === currentMonth.year && month.month <= currentMonth.month)) {
		return true;
	}

	return false;
};

const MonthCalendar = ({ year, month, range, onClick }: any) => {
	const daysOfWeek = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
	const monthData = getMonthCalendar(year, month, range);
	const firstDayIndex = new Date(year, month - 1, 1).getDay();
	const calendarDays = [];

	const handleDayClick = (date: string) => {
		onClick(date);
	};

	for (let i = 0; i < firstDayIndex; i++) {
		calendarDays.push(<div key={`empty-${i}`} className={styles.gridItem}></div>);
	}

	for (let i = 0; i < monthData.days.length; i++) {
		const day = monthData.days[i];
		calendarDays.push(
			<button
				key={day.value}
				className={clsx(styles.gridItem, styles.day, {
					[styles.daySelected]: day.selected,
					[styles.dayInRange]: day.inRange,
					[styles.dayStartRange]: day.startRange,
					[styles.dayEndRange]: day.endRange,
				})}
				disabled={day.disabled}
				onClick={() => handleDayClick(day.value)}
			>
				{day.label}
			</button>,
		);
	}

	return (
		<div className={styles.month}>
			<span className={styles.monthLabel}>{monthData.label}</span>
			<div className={styles.monthHeader}>
				{daysOfWeek.map((day) => (
					<div key={day} className={styles.dayOfTheWeek}>
						{day}
					</div>
				))}
			</div>
			<div className={styles.grid}>{calendarDays}</div>
		</div>
	);
};

export const DateRangePickerPopover = (props: DateRangePickerPopoverProps) => {
	const [startMonth, setStartMonth] = useState<{ year: number; month: number }>(
		getMonthFromDate(props.value?.start ? getDateFromString(props.value.start) : new Date()),
	);
	const [dateRange, setDateRange] = useState<DateRange>(props.value ?? { start: undefined, end: undefined });

	const handleArrowClick = (next: boolean) => {
		setStartMonth(getNextMonth(startMonth, next));
	};

	const handleDayClick = (date: string) => {
		const newDateRange: DateRange = { ...dateRange };

		if (!dateRange.start) {
			newDateRange.start = date;
		} else if (!dateRange.end) {
			if (dateRange.start < date) {
				newDateRange.end = date;
			} else {
				newDateRange.start = date;
				newDateRange.end = dateRange.start;
			}
		} else {
			newDateRange.start = date;
			newDateRange.end = undefined;
		}

		if (newDateRange.start !== dateRange.start || newDateRange.end !== dateRange.end) {
			setDateRange(newDateRange);
		}
	};

	const handleDateRangeChange = () => {
		if (props.onChange) {
			props.onChange(dateRange);
		}

		if (props.onPopoverClose) {
			props.onPopoverClose();
		}
	};

	const handleClearButtonClick = () => {
		const newDateRange = { start: undefined, end: undefined };
		setDateRange(newDateRange);

		if (props.onChange) {
			props.onChange(newDateRange);
		}
	};

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<div className={styles.headerText}>
					{dateRange.start ? (
						<span className={styles.headerDate}>{formatDate(getDateFromString(dateRange.start), DATE_FORMAT_FULL_DATE)}</span>
					) : (
						<span>{props.label[0]}</span>
					)}
					<ArrowRightIcon />
					{dateRange.end ? (
						<span className={styles.headerDate}>{formatDate(getDateFromString(dateRange.end), DATE_FORMAT_FULL_DATE)}</span>
					) : (
						<span>{props.label[1]}</span>
					)}
				</div>
				{(dateRange.start || dateRange.end) && <IconButton icon={CloseIcon} onClick={handleClearButtonClick} />}
			</div>
			<div className={styles.calendar}>
				<IconButton
					className={styles.arrowLeft}
					icon={ChevronLeftIcon}
					disabled={allowSubMonth(startMonth)}
					onClick={() => handleArrowClick(false)}
				/>
				<IconButton className={styles.arrowRight} icon={ChevronRightIcon} onClick={() => handleArrowClick(true)} />
				<MonthCalendar year={startMonth.year} month={startMonth.month} range={dateRange} onClick={handleDayClick} />
				<MonthCalendar
					year={getNextMonth(startMonth, true).year}
					month={getNextMonth(startMonth, true).month}
					range={dateRange}
					onClick={handleDayClick}
				/>
			</div>
			<div className={styles.footer}>
				<Button onClick={handleDateRangeChange}>Listo</Button>
			</div>
		</div>
	);
};

export const DateRangePicker = (props: DateRangePickerProps) => {
	const [value, setValue] = useState<DateRange>({ start: undefined, end: undefined });

	const handleChange = (newValue: DateRange) => {
		setValue(newValue);
		props.onChange(newValue);
	};

	return (
		<PopoverInput value={getDateRangeLabel(value)} icon={CalendarIcon} placeholder={props.placeholder}>
			<DateRangePickerPopover value={value} label={props.label} onChange={handleChange} />
		</PopoverInput>
	);
};
