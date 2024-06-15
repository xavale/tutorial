/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClassValue, clsx } from 'clsx';
import styles from './IconButton.css';

export interface IconButtonProps {
	icon: any;
	className?: ClassValue;
	disabled?: boolean;
	onClick: () => void;
}

export const IconButton = (props: IconButtonProps) => {
	return (
		<button className={clsx(styles.root, props.className)} disabled={props.disabled} onClick={props.onClick}>
			{<props.icon customClassName={styles.icon} />}
		</button>
	);
};
