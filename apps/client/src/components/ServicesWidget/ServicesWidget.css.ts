import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

export const root = style({
	background: vars.palette.common.white,
	border: `1px solid ${vars.palette.common.gray[3]}`,
	borderRadius: '8px',
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
});

export const list = style({
	alignItems: 'center',
	borderBottom: `1px solid ${vars.palette.common.gray[3]}`,
	display: 'flex',
	justifyContent: 'center',
	padding: '6px 0 0 0',
});

export const trigger = style({
	borderTopLeftRadius: '6px',
	borderTopRightRadius: '6px',
	cursor: 'pointer',
	fontFamily: 'inherit',
	padding: '0 20px',
	height: '48px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '6px',
	fontSize: vars.typography.fontSize[2],
	fontWeight: 600,
	lineHeight: 1,
	color: vars.palette.primary.dark,
	userSelect: 'none',

	selectors: {
		['&:hover']: {
			background: vars.palette.primary.light,
			color: vars.palette.primary.main,
		},
		["&[data-state='active']"]: {
			color: vars.palette.primary.main,
			boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
		},
	},
});

export const content = style({
	flexGrow: 1,
	minHeight: '128px',
	padding: '24px',
	outline: 'none',
});
