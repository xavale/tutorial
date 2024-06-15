import { ClassValue, clsx } from 'clsx';
import styles from './Icon.css';

export interface IconProps {
	customClassName?: ClassValue;
}

export const ChevronLeftIcon = (props: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={clsx(styles.root, props.customClassName)} height="24px" viewBox="0 -960 960 960" width="24px">
			<path d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z" />
		</svg>
	);
};

export const ChevronRightIcon = (props: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={clsx(styles.root, props.customClassName)} height="24px" viewBox="0 -960 960 960" width="24px">
			<path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
		</svg>
	);
};

export const ChevronUpIcon = (props: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={clsx(styles.root, props.customClassName)} height="24px" viewBox="0 -960 960 960" width="24px">
			<path d="M480-528 324-372q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-528Z" />
		</svg>
	);
};

export const TimeIcon = (props: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={clsx(styles.root, props.customClassName)} height="24px" viewBox="0 -960 960 960" width="24px">
			<path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
		</svg>
	);
};
