import { style } from '@vanilla-extract/css';

export const root = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '20px',
	width: '100%',
});

export const grid = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '12px',
	position: 'relative',
	width: '100%',
});

export const gridItem = style({
	flex: '1 1 25%',
});

export const actions = style({
	display: 'flex',
	justifyContent: 'flex-end',
	width: '100%',
});

export default {
	root,
	actions,
	grid,
	gridItem,
};
