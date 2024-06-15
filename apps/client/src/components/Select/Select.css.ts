import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

const root = style({
	display: 'inline-flex',
	position: 'relative',
	width: '100%',
});

const select = style({
	background: vars.palette.common.white,
	border: `1px solid ${vars.palette.primary.dark}`,
	borderRadius: '6px',
	color: vars.palette.primary.dark,
	display: 'flex',
	fontSize: vars.typography.fontSize[2],
	height: '48px',
	lineHeight: vars.typography.lineHeight.relaxed,
	outline: 0,
	overflow: 'hidden',
	padding: '0 48px 0 12px',
	position: 'relative',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	width: '100%',

	selectors: {
		[`&:hover`]: {
			background: vars.palette.primary.light,
			borderColor: vars.palette.primary.main,
			color: vars.palette.primary.main,
		},
	},
});

const option = style({
	background: vars.palette.common.white,
	color: vars.palette.primary.dark,
	fontSize: vars.typography.fontSize[2],
	lineHeight: vars.typography.lineHeight.relaxed,

	selectors: {
		[`&:hover`]: {
			background: vars.palette.primary.light,
			color: vars.palette.primary.main,
		},
	},
});

const hasIcon = style({
	padding: '0 48px',
});

const icon = style({
	left: '12px',
	pointerEvents: 'none',
	position: 'absolute',
	top: '12px',

	selectors: {
		[`${root}:hover > &`]: {
			fill: vars.palette.primary.main,
		},
	},
});

const chevron = style({
	pointerEvents: 'none',
	position: 'absolute',
	right: '12px',
	top: '12px',
	transform: 'rotate(180deg)',

	selectors: {
		[`${root}:hover > &`]: {
			fill: vars.palette.primary.main,
		},
		[`${select}:focus > &`]: {
			transform: 'rotate(0deg)',
		},
	},
});

export default {
	root,
	chevron,
	hasIcon,
	icon,
	option,
	select,
};
