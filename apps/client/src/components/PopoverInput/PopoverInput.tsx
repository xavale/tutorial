/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import { Children, PropsWithChildren, cloneElement, useEffect, useRef, useState } from 'react';
import styles from './PopoverInput.css';

export interface PopoverInputProps {
	value: any;
	placeholder: string;
	icon?: any;
	onOpen?: () => void;
	onClose?: () => void;
}

export const PopoverInput = (props: PropsWithChildren<PopoverInputProps>) => {
	const [open, setOpen] = useState<boolean>(false);
	const ref = useRef<any>(null);

	const handlePopoverOpen = () => {
		setOpen(true);

		if (props.onOpen) {
			props.onOpen();
		}
	};

	const handlePopoverClose = () => {
		setOpen(false);

		if (props.onClose) {
			props.onClose();
		}
	};

	const handlePopoverClickOutside = (event: { target: any }) => {
		if (ref.current && !ref.current.contains(event.target)) {
			handlePopoverClose();
		}
	};

	const childrenWithEvents = Children.map(props.children, (child: any) => {
		return cloneElement(child, { onPopoverClose: handlePopoverClose });
	});

	useEffect(() => {
		document.addEventListener('mousedown', handlePopoverClickOutside);

		return () => {
			document.removeEventListener('mousedown', handlePopoverClickOutside);
		};
	}, []);

	return (
		<div className={styles.root}>
			<div className={styles.trigger} onClick={handlePopoverOpen}>
				{props.icon && <props.icon customClassName={styles.triggerIcon} />}
				<span className={styles.triggerText}>{props.value || props.placeholder}</span>
			</div>
			<div ref={ref} className={clsx(styles.popover, { [styles.popoverOpen]: open })}>
				{open && childrenWithEvents}
			</div>
		</div>
	);
};
