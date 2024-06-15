import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

export const root = style({
	alignItems: 'center',
	background: 'transparent',
	borderRadius: '18px',
	cursor: 'pointer',
	display: 'inline-flex',
	flexShrink: 0,
	height: '36px',
	justifyContent: 'center',
	outline: 'none',
	width: '36px',

	selectors: {
		['&:hover:not(:disabled)']: {
			background: vars.palette.primary.light,
		},
		['&:disabled']: {
			background: vars.palette.common.gray[1],
			cursor: 'not-allowed',
		},
	},
});

export const icon = style({
	selectors: {
		[`${root}:hover:not(:disabled) &`]: {
			fill: vars.palette.primary.main,
		},
		[`${root}:disabled &`]: {
			fill: vars.palette.common.gray[3],
		},
	},
});

export default {
	root,
	icon,
};
