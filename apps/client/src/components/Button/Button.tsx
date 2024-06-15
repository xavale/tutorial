/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react';
import styles from './Button.css';

export interface ButtonProps {
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
	const handleClick = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	return (
		<button className={styles.root} disabled={props.disabled} onClick={handleClick}>
			{props.children}
		</button>
	);
};
