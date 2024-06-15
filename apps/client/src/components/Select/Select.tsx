/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronUpIcon } from '@/components/Icon/Icon';
import { clsx } from 'clsx';
import { useState } from 'react';
import styles from './Select.css';

export interface SelectOption {
	value: string | undefined;
	label: string;
}

export interface SelectProps {
	placeholder: string;
	icon?: any;
	options: SelectOption[];
	onChange?: (value: string | undefined) => void;
}

export const Select = (props: SelectProps) => {
	const [value, setValue] = useState<string | undefined>(undefined);

	const handleChange = (event: any) => {
		setValue(event.target.value);

		if (props.onChange) {
			props.onChange(event.target.value);
		}
	};

	return (
		<div className={styles.root}>
			<select className={clsx(styles.select, { [styles.hasIcon]: props.icon })} id={'input-id'} value={value} onChange={handleChange}>
				<option className={styles.option} key={props.placeholder} value={undefined}>
					{props.placeholder}
				</option>
				{props.options.map((option) => (
					<option key={option.value} className={styles.option} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{props.icon && <props.icon customClassName={styles.icon} />}
			<ChevronUpIcon customClassName={styles.chevron} />
		</div>
	);
};
