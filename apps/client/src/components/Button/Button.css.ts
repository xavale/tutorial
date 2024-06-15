import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

const root = style({
	alignItems: 'center',
	background: vars.palette.primary.main,
	border: `1px solid ${vars.palette.primary.main}`,
	borderRadius: '6px',
	color: vars.palette.common.white,
	cursor: 'pointer',
	display: 'inline-flex',
	fontSize: vars.typography.fontSize[2],
	fontWeight: 600,
	gap: '6px',
	height: '48px',
	justifyContent: 'center',
	letterSpacing: vars.typography.letterSpacing.relaxed,
	outline: 'none',
	padding: '0 20px',
	whiteSpace: 'nowrap',

	selectors: {
		['&:hover:not(:disabled)']: {
			background: vars.palette.primary.dark,
		},
		['&:disabled']: {
			background: vars.palette.common.gray[1],
			borderColor: vars.palette.common.gray[1],
			color: vars.palette.common.gray[3],
			cursor: 'not-allowed',
		},
	},
});

export default {
	root,
};
