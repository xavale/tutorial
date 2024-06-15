'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { AutoComplete } from '@/components/AutoComplete/AutoComplete';
import { Button } from '@/components/Button/Button';
import { DateRange, DateRangePicker } from '@/components/DateRangePicker/DateRangePicker';
import { BuildingIcon } from '@/components/Icon/BuildingIcon';
import { FlightIcon } from '@/components/Icon/FlightIcon';
import locations from '@/data/locations';
import { useState } from 'react';
import styles from './CarsWidget.css';

const options = locations
	.filter((location) => location.type === 'airport')
	.map((location) => ({
		value: location.code,
		title: location.name,
		description: location.address,
		icon: location.type === 'airport' ? FlightIcon : BuildingIcon,
	}));

export const FlightsWidget = () => {
	const [departureLocation, setDepartureLocation] = useState<string | undefined>(undefined);
	const [arrivalLocation, setArrivalLocation] = useState<string | undefined>(undefined);
	const [startDate, setStartDate] = useState<string | undefined>(undefined);
	const [endDate, setEndDate] = useState<string | undefined>(undefined);

	const handleDepartureLocationChange = (value: string | undefined) => {
		setDepartureLocation(value);
	};

	const handleArrivalLocationChange = (value: string | undefined) => {
		setArrivalLocation(value);
	};

	const handleDateRangeChange = (dateRange: DateRange) => {
		setStartDate(dateRange.start);
		setEndDate(dateRange.end);
	};

	const handleSearch = () => {
		console.log(departureLocation, arrivalLocation, startDate, endDate);
	};

	return (
		<div className={styles.root}>
			<div className={styles.grid}>
				<div className={styles.gridItem}>
					<AutoComplete
						placeholder={'Origen'}
						hint={'Busca por provincia, municipio, aeropuerto o dirección'}
						options={options}
						onChange={handleDepartureLocationChange}
					/>
				</div>
				<div className={styles.gridItem}>
					<AutoComplete
						placeholder={'Destino'}
						hint={'Busca por provincia, municipio, aeropuerto o dirección'}
						options={options}
						onChange={handleArrivalLocationChange}
					/>
				</div>
				<div className={styles.gridItem}>
					<DateRangePicker placeholder={'Fechas'} label={['Fecha de ida', 'Fecha de regreso']} onChange={handleDateRangeChange} />
				</div>
			</div>
			<div className={styles.actions}>
				<Button onClick={handleSearch}>Buscar</Button>
			</div>
		</div>
	);
};
