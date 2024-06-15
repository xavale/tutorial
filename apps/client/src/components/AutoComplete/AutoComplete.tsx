/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseIcon } from '@/components/Icon/CloseIcon';
import { LocationIcon } from '@/components/Icon/LocationIcon';
import { SearchIcon } from '@/components/Icon/SearchIcon';
import { IconButton } from '@/components/IconButton/IconButton';
import { PopoverInput } from '@/components/PopoverInput/PopoverInput';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './AutoComplete.css';

export interface AutoCompleteOption {
	value: string | undefined;
	title: string;
	description: string;
	icon: any;
}

export interface AutoCompletePopoverProps {
	value: string | undefined;
	placeholder: string;
	hint: string;
	options: any[];
	onChange: (option: AutoCompleteOption | undefined) => void;
	onPopoverClose?: () => void;
}

export interface AutoCompleteProps {
	placeholder: string;
	hint: string;
	options: any[];
	onChange: (option: string | undefined) => void;
}

const searchOptions = (options: AutoCompleteOption[], search: string): AutoCompleteOption[] => {
	const normalizedSearch = search.toLowerCase();

	return options
		.filter((option) => option.title.toLowerCase().includes(normalizedSearch) || option.description.toLowerCase().includes(normalizedSearch))
		.sort((a: AutoCompleteOption, b: AutoCompleteOption) => a.title.localeCompare(b.title));
};

const AutoCompletePopover = (props: AutoCompletePopoverProps) => {
	const [search, setSearch] = useState<string>(props.value ?? '');
	const ref = useRef<any>(null);

	const foundOptions = useMemo<AutoCompleteOption[]>(() => {
		if (!search) {
			return [];
		}

		return searchOptions(props.options, search);
	}, [props.options, search]);

	const handleInputChange = (event: { target: any }) => {
		setSearch(event.target.value);
	};

	const handleClearButtonClick = () => {
		setSearch('');
		props.onChange(undefined);
	};

	const handleOptionClick = (option: AutoCompleteOption) => {
		setSearch(option.title);
		props.onChange(option);

		if (props.onPopoverClose) {
			props.onPopoverClose();
		}
	};

	useEffect(() => {
		ref.current.focus();
	}, []);

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<input
					ref={ref}
					className={styles.input}
					type="text"
					placeholder={props.placeholder}
					value={search ?? props.value}
					onChange={handleInputChange}
				/>
				{search && <IconButton className={styles.headerButton} icon={CloseIcon} onClick={handleClearButtonClick} />}
			</div>
			<ul className={styles.list}>
				{props.hint && foundOptions.length === 0 && (
					<div className={styles.listPlaceholder}>
						<SearchIcon />
						<span>{props.hint}</span>
					</div>
				)}
				{foundOptions.map((option) => (
					<li key={option.value} className={styles.option} onClick={() => handleOptionClick(option)}>
						<option.icon customClassName={styles.optionIcon} />
						<span className={styles.optionText}>
							<span>{option.title}</span>
							<span className={styles.optionDescription}>{option.description}</span>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export const AutoComplete = (props: AutoCompleteProps) => {
	const [value, setValue] = useState<AutoCompleteOption | undefined>(undefined);

	const handleChange = (newValue: AutoCompleteOption | undefined) => {
		setValue(newValue);
		props.onChange(newValue?.value);
	};

	return (
		<PopoverInput value={value?.title} icon={LocationIcon} placeholder={props.placeholder}>
			<AutoCompletePopover value={value?.title} placeholder={props.placeholder} hint={props.hint} options={props.options} onChange={handleChange} />
		</PopoverInput>
	);
};
