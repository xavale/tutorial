import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

export const base = style({
	background: vars.palette.common.white,
	borderBottom: `1px solid ${vars.palette.common.gray[3]}`,
	boxShadow: '0 2px 10px rgba(141, 141, 141,.3)',
	position: 'relative',
	width: '100%',
	zIndex: 10,
});

export const constrain = style({
	alignItems: 'center',
	display: 'flex',
	gap: '36px',
	justifyContent: 'space-between',
	margin: '0 auto',
	maxWidth: '1300px',
	padding: '0 20px',
	position: 'relative',
	width: '100%',
});

export const logo = style({
	alignItems: 'center',
	cursor: 'pointer',
	display: 'inline-flex',
	flexShrink: 0,
	height: '66px',
	justifyContent: 'center',
	width: '118px',
	whiteSpace: 'nowrap',
});

// export const navigation = style({
// 	alignItems: 'center',
// 	display: 'flex',
// 	flex: 1,
// 	gap: '12px',
// 	padding: '12px 0',
// 	justifyContent: 'center',
// });

// export const button = style({
// 	alignItems: 'center',
// 	borderRadius: '6px',
// 	color: vars.palette.primary.dark,
// 	cursor: 'pointer',
// 	display: 'inline-flex',
// 	fontSize: vars.typography.fontSize[2],
// 	fontWeight: 600,
// 	gap: '6px',
// 	height: '48px',
// 	justifyContent: 'center',
// 	padding: '0 20px',
// 	whiteSpace: 'nowrap',

// 	selectors: {
// 		['&:hover']: {
// 			background: vars.palette.primary.light,
// 			color: vars.palette.primary.main,
// 		},
// 		['&:nth-last-child(2)']: {
// 			marginLeft: 'auto',
// 		},
// 	},
// });
