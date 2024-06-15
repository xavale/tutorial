import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

const root = style({
	alignItems: 'stretch',
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
	height: '400px',
	position: 'relative',
	width: '400px',
});

const header = style({
	alignItems: 'center',
	background: vars.palette.common.white,
	borderBottom: `1px solid ${vars.palette.common.gray[3]}`,
	display: 'flex',
	gap: '8px',
	height: '60px',
	justifyContent: 'center',
});

const headerButton = style({
	marginRight: '12px',
});

const input = style({
	background: vars.palette.common.white,
	color: vars.palette.primary.dark,
	display: 'inline-flex',
	flex: 1,
	fontSize: vars.typography.fontSize[3],
	height: '59px',
	padding: '0 20px',

	selectors: {
		['&::placeholder']: {
			color: vars.palette.common.gray[4],
		},
	},
});

const list = style({
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: '8px',
	overflowX: 'hidden',
	overflowY: 'auto',
	listStyleType: 'none',
	padding: '0 0 12px 0',
});

const listPlaceholder = style({
	alignItems: 'center',
	color: vars.palette.primary.dark,
	display: 'flex',
	flexDirection: 'column',
	fontSize: vars.typography.fontSize[1],
	gap: '8px',
	padding: '20px',
	textAlign: 'center',
});

const option = style({
	alignItems: 'center',
	cursor: 'pointer',
	display: 'flex',
	gap: '12px',
	padding: '12px',

	selectors: {
		[`&:hover`]: {
			background: vars.palette.primary.light,
		},
	},
});

const optionIcon = style({
	selectors: {
		[`${option}:hover &`]: {
			fill: vars.palette.primary.main,
		},
	},
});

const optionText = style({
	display: 'flex',
	fontSize: vars.typography.fontSize[2],
	flexDirection: 'column',
	gap: '6px',

	selectors: {
		[`${option}:hover &`]: {
			color: vars.palette.primary.main,
		},
	},
});

const optionDescription = style({
	color: vars.palette.common.gray[4],
	fontSize: vars.typography.fontSize[1],

	selectors: {
		[`${option}:hover &`]: {
			color: vars.palette.primary.main,
		},
	},
});

export default {
	root,
	header,
	headerButton,
	input,
	list,
	listPlaceholder,
	option,
	optionDescription,
	optionIcon,
	optionText,
};
