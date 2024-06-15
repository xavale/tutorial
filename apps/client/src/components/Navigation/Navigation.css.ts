import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

// const enterFromRight = keyframes({
// 	'0%': { opacity: 0, transform: 'translateX(200px)' },
// 	'100%': { opacity: 1, transform: 'translateX(0)' },
// });

// const enterFromLeft = keyframes({
// 	'0%': { opacity: 0, transform: 'translateX(-200px)' },
// 	'100%': { opacity: 1, transform: 'translateX(0)' },
// });

// const exitToRight = keyframes({
// 	'0%': { opacity: 0, transform: 'translateX(0)' },
// 	'100%': { opacity: 1, transform: 'translateX(200px)' },
// });

// const exitToLeft = keyframes({
// 	'0%': { opacity: 0, transform: 'translateX(0)' },
// 	'100%': { opacity: 1, transform: 'translateX(-200px)' },
// });

// const fadeIn = keyframes({
// 	'0%': { opacity: 0 },
// 	'100%': { opacity: 1 },
// });

// const fadeOut = keyframes({
// 	'0%': { opacity: 1 },
// 	'100%': { opacity: 0 },
// });

// const scaleIn = keyframes({
// 	'0%': { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
// 	'100%': { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
// });

// const scaleOut = keyframes({
// 	'0%': { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
// 	'100%': { opacity: 0, transform: 'rotateX(-30deg) scale(0.9)' },
// });

export const root = style({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	position: 'relative',
});

export const list = style({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	listStyle: 'none',
	margin: 0,
	padding: 0,
});

export const trigger = style({
	alignItems: 'center',
	borderRadius: '6px',
	color: vars.palette.primary.dark,
	cursor: 'pointer',
	display: 'inline-flex',
	fontSize: vars.typography.fontSize[2],
	fontWeight: 600,
	gap: '6px',
	height: '48px',
	justifyContent: 'center',
	padding: '0 20px',
	whiteSpace: 'nowrap',

	selectors: {
		['&:hover']: {
			background: vars.palette.primary.light,
			color: vars.palette.primary.main,
		},
	},
});

export const chevron = style({
	position: 'relative',
	fill: vars.palette.primary.dark,
	flexShrink: 0,
	top: '1px',
	transform: 'rotate(-180deg)',
	// transition: 'transform 250ms ease',

	selectors: {
		[`${trigger}:hover > &`]: {
			fill: vars.palette.primary.main,
		},
		["[data-state='open'] > &"]: {
			transform: 'rotate(0deg)',
		},
	},
});

export const position = style({
	display: 'flex',
	justifyContent: 'center',
	left: 0,
	perspective: '2000px',
	position: 'absolute',
	top: '100%',
	width: '100%',
});

export const viewport = style({
	background: vars.palette.common.white,
	borderRadius: '6px',
	boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	height: '320px',
	marginTop: '4px',
	overflow: 'hidden',
	position: 'relative',
	// transformOrigin: 'top center',
	// transition: 'width, height, 300ms ease',
	width: '100%',

	// selectors: {
	// 	["&[data-state='open']"]: {
	// 		animation: `${scaleIn} 200ms ease`,
	// 	},
	// 	["&[data-state='closed']"]: {
	// 		animation: `${scaleOut} 200ms ease`,
	// 	},
	// },
});

export const content = style({
	// animationDuration: '250ms',
	// animationTimingFunction: 'ease',
	left: 0,
	position: 'absolute',
	top: 0,
	width: '100%',

	// selectors: {
	// 	["&[data-motion='from-start']"]: {
	// 		animationName: enterFromLeft,
	// 	},
	// 	["&[data-motion='from-end']"]: {
	// 		animationName: enterFromRight,
	// 	},
	// 	["&[data-motion='to-start']"]: {
	// 		animationName: exitToLeft,
	// 	},
	// 	["&[data-motion='to-end']"]: {
	// 		animationName: exitToRight,
	// 	},
	// },
});

// export const indicator = style({
// 	alignItems: 'flex-end',
// 	display: 'flex',
// 	height: '10px',
// 	justifyContent: 'center',
// 	overflow: 'hidden',
// 	top: '100%',
// 	transition: 'width, transform 250ms ease',
// 	zIndex: 1,

// 	selectors: {
// 		["&[data-state='visible']"]: {
// 			animation: `${fadeIn} 200ms ease`,
// 		},
// 		["&[data-state='hidden']"]: {
// 			animation: `${fadeOut} 200ms ease`,
// 		},
// 	},
// });

// export const arrow = style({
// 	background: vars.palette.common.white,
// 	borderTopLeftRadius: '2px',
// 	height: '10px',
// 	position: 'relative',
// 	top: '20%',
// 	transform: 'rotate(45deg)',
// 	width: '10px',
// });

export const serviceList = style({
	display: 'grid',
	columnGap: '12px',
	gridTemplateColumns: '1fr 1fr',
	listStyle: 'none',
	margin: 0,
	padding: '24px',
});

export const serviceListItem = style({
	borderRadius: '6px',
	color: vars.palette.primary.dark,
	display: 'block',
	fontSize: vars.typography.fontSize[3],
	outline: 'none',
	padding: '12px',

	selectors: {
		['&:hover']: {
			background: vars.palette.primary.light,
			color: vars.palette.primary.main,
		},
	},
});

export const serviceLink = style({
	color: 'inherit',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	textDecoration: 'none',
	userSelect: 'none',
});

export const serviceName = style({
	color: vars.palette.primary.main,
	fontSize: vars.typography.fontSize[3],
	fontWeight: 600,
	lineHeight: vars.typography.lineHeight.relaxed,
});

export const serviceDescription = style({
	fontSize: vars.typography.fontSize[2],
	lineHeight: vars.typography.lineHeight.relaxed,
});

export default {
	root,
	chevron,
	list,
	trigger,
};
