import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

export const base = style({
	background: vars.palette.common.gray[1],
	borderRadius: '8px',
	display: 'flex',
	height: '540px',
	overflow: 'hidden',
	position: 'relative',
	width: '100%',
});

export const image = style({
	marginTop: '-170px',
	objectFit: 'cover',
	width: '100%',
});

export const text = style({
	alignItems: 'flex-start',
	background: 'rgba(242,251,249,0.95)',
	borderRadius: '6px',
	bottom: '36px',
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	left: '36px',
	padding: '24px',
	position: 'absolute',
	width: '40%',
});

export const title = style({
	color: vars.palette.primary.dark,
	fontSize: vars.typography.fontSize[6],
	fontWeight: 600,
	lineHeight: vars.typography.lineHeight.relaxed,
});

export const description = style({
	color: vars.palette.primary.dark,
	lineHeight: vars.typography.lineHeight.relaxed,
});

export const button = style({
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
	outline: 'none',
	padding: '0 20px',
	textDecoration: 'none',
	whiteSpace: 'nowrap',
	WebkitAppearance: 'none',
	WebkitTapHighlightColor: 'transparent',

	selectors: {
		['&:hover']: {
			background: vars.palette.primary.dark,
		},
	},
});
