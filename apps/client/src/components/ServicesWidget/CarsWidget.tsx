'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { AutoComplete } from '@/components/AutoComplete/AutoComplete';
import { Button } from '@/components/Button/Button';
import { DateRange, DateRangePicker } from '@/components/DateRangePicker/DateRangePicker';
import { BuildingIcon } from '@/components/Icon/BuildingIcon';
import { FlightIcon } from '@/components/Icon/FlightIcon';
import { TimeIcon } from '@/components/Icon/Icon';
import { Select } from '@/components/Select/Select';
import locations from '@/data/locations';
import { format, parse } from 'date-fns';
import { useState } from 'react';
import styles from './CarsWidget.css';

const CAR_CATEGORIES = [
	{
		value: 'economico_automatico',
		label: 'Económico automático',
	},
	{
		value: 'economico_mecanico',
		label: 'Económico mecánico',
	},
	{
		value: 'medio_automatico',
		label: 'Medio automático',
	},
	{
		value: 'medio_mecanico',
		label: 'Medio mecánico',
	},
];

const getTimesArray = (start: number, end: number, length: number): Array<any> => {
	let startMin = start * 60;
	const endMin = end * 60;
	const times = [];

	while (startMin <= endMin) {
		const mins = startMin % 60;
		const hours = Math.floor(startMin / 60);
		const timeString = hours.toString() + ':' + mins.toString().padStart(2, '0');
		const date = parse(timeString, 'HH:mm', new Date());
		times.push({ value: timeString, label: format(date, 'h:mm a') });
		startMin += length;
	}

	return times;
};

const options = locations
	.filter((location) => location.country === 'CUB')
	.map((location) => ({
		value: location.code,
		title: location.name,
		description: location.address,
		icon: location.type === 'airport' ? FlightIcon : BuildingIcon,
	}));

export const CarsWidget = () => {
	const [pickUpLocation, setPickUpLocation] = useState<string | undefined>(undefined);
	const [returnLocation, setReturnLocation] = useState<string | undefined>(undefined);
	const [startDate, setStartDate] = useState<string | undefined>(undefined);
	const [endDate, setEndDate] = useState<string | undefined>(undefined);
	const [pickUpHour, setPickUpHour] = useState<string | undefined>(undefined);
	const [returnHour, setReturnHour] = useState<string | undefined>(undefined);
	const [category, setCategory] = useState<string | undefined>(undefined);

	const handlePickUpLocationChange = (value: string | undefined) => {
		setPickUpLocation(value);
	};

	const handleReturnLocationChange = (value: string | undefined) => {
		setReturnLocation(value);
	};

	const handleDateRangeChange = (dateRange: DateRange) => {
		setStartDate(dateRange.start);
		setEndDate(dateRange.end);
	};

	const handlePickUpHourChange = (value: string | undefined) => {
		setPickUpHour(value);
	};

	const handleReturnHourChange = (value: string | undefined) => {
		setReturnHour(value);
	};

	const handleCategoryChange = (value: string | undefined) => {
		setCategory(value);
	};

	const handleSearch = () => {
		console.log(pickUpLocation, returnLocation, startDate, endDate, pickUpHour, returnHour, category);
	};

	return (
		<div className={styles.root}>
			<div className={styles.grid}>
				<div className={styles.gridItem}>
					<AutoComplete
						placeholder={'Entrega'}
						hint={'Busca por provincia, municipio, aeropuerto o dirección'}
						options={options}
						onChange={handlePickUpLocationChange}
					/>
				</div>
				<div className={styles.gridItem}>
					<AutoComplete
						placeholder={'Devolución (igual a la entrega)'}
						hint={'Busca por provincia, municipio, aeropuerto o dirección'}
						options={options}
						onChange={handleReturnLocationChange}
					/>
				</div>
				<div className={styles.gridItem}>
					<DateRangePicker placeholder={'Fechas'} label={['Fecha de entrega', 'Fecha de devolución']} onChange={handleDateRangeChange} />
				</div>
				<div className={styles.gridItem}>
					<Select placeholder={'Hora de entrega'} options={getTimesArray(7, 22, 30)} icon={TimeIcon} onChange={handlePickUpHourChange} />
				</div>
				<div className={styles.gridItem}>
					<Select placeholder={'Hora de devolución'} options={getTimesArray(7, 22, 30)} icon={TimeIcon} onChange={handleReturnHourChange} />
				</div>
				<div className={styles.gridItem}>
					<Select placeholder={'Categoría'} options={CAR_CATEGORIES} onChange={handleCategoryChange} />
				</div>
			</div>
			<div className={styles.actions}>
				<Button onClick={handleSearch}>Buscar</Button>
			</div>
		</div>
	);
};
