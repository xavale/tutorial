import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

const root = style({
	display: 'flex',
	position: 'relative',
});

const trigger = style({
	alignItems: 'center',
	background: vars.palette.common.white,
	border: `1px solid ${vars.palette.primary.dark}`,
	borderRadius: '6px',
	color: vars.palette.primary.dark,
	cursor: 'pointer',
	display: 'flex',
	fontSize: vars.typography.fontSize[2],
	gap: '12px',
	height: '48px',
	justifyContent: 'flex-start',
	lineHeight: vars.typography.lineHeight.relaxed,
	outline: 'none',
	padding: '0 12px',
	position: 'relative',
	width: '100%',

	selectors: {
		['&:hover']: {
			background: vars.palette.primary.light,
			borderColor: vars.palette.primary.main,
			color: vars.palette.primary.main,
		},
	},
});

const triggerIcon = style({
	selectors: {
		[`${trigger}:hover > &`]: {
			fill: vars.palette.primary.main,
		},
	},
});

const triggerText = style({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
});

const popover = style({
	background: vars.palette.common.white,
	borderRadius: '6px',
	boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	display: 'flex',
	height: 0,
	insetBlockStart: 0,
	left: 0,
	opacity: 0,
	overflow: 'hidden',
	position: 'absolute',
	width: 0,
	zIndex: 1,
});

const popoverOpen = style({
	height: 'max-content',
	opacity: 1,
	width: 'max-content',
});

export default {
	root,
	popover,
	popoverOpen,
	trigger,
	triggerIcon,
	triggerText,
};
