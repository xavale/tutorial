import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
});

const header = style({
	alignItems: 'center',
	background: vars.palette.common.white,
	color: vars.palette.common.gray[4],
	borderBottom: `1px solid ${vars.palette.common.gray[3]}`,
	display: 'flex',
	fontSize: vars.typography.fontSize[3],
	gap: '8px',
	height: '60px',
	padding: '0 12px 0 20px',
});

const headerText = style({
	alignItems: 'center',
	display: 'flex',
	flex: 1,
	gap: '8px',
});

const headerDate = style({
	color: vars.palette.primary.dark,
});

const calendar = style({
	display: 'flex',
	gap: '20px',
	padding: '0 20px',
	position: 'relative',
	width: '620px',
});

const arrowLeft = style({
	position: 'absolute',
});

const arrowRight = style({
	position: 'absolute',
	right: '20px',
});

const month = style({
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: '4px',
	width: '280px',
});

const monthLabel = style({
	alignItems: 'center',
	color: vars.palette.primary.dark,
	display: 'flex',
	fontSize: vars.typography.fontSize[3],
	fontWeight: 600,
	height: '36px',
	lineHeight: vars.typography.lineHeight.relaxed,
	margin: '0 auto',
	textTransform: 'capitalize',
});

const monthHeader = style({
	display: 'grid',
	color: vars.palette.primary.dark,
	fontSize: vars.typography.fontSize[2],
	gridTemplateColumns: 'repeat(7, 1fr)',
	width: '100%',
});

const dayOfTheWeek = style({
	alignItems: 'center',
	display: 'flex',
	height: '36px',
	justifyContent: 'center',
	width: '40px',
});

const grid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(7, 1fr)',
	rowGap: '4px',
});

const gridItem = style({
	alignItems: 'center',
	borderRadius: '20px',
	color: vars.palette.primary.dark,
	display: 'flex',
	fontSize: vars.typography.fontSize[2],
	fontWeight: 600,
	height: '40px',
	justifyContent: 'center',
	width: '40px',
});

const day = style({
	cursor: 'pointer',

	selectors: {
		['&:disabled']: {
			color: vars.palette.common.gray[3],
			cursor: 'not-allowed',
		},
		['&:hover:not(:disabled)']: {
			background: vars.palette.primary.light,
			color: vars.palette.primary.main,
		},
	},
});

const daySelected = style({
	background: vars.palette.primary.main,
	color: vars.palette.common.white,

	selectors: {
		['&:hover:not(:disabled)']: {
			background: vars.palette.primary.main,
			color: vars.palette.common.white,
		},
	},
});

const dayInRange = style({
	background: vars.palette.primary.light,
	borderRadius: 0,
	color: vars.palette.primary.dark,

	selectors: {
		['&:hover:not(:disabled)']: {
			color: vars.palette.primary.main,
		},
	},
});

const dayStartRange = style([
	daySelected,
	{
		position: 'relative',

		selectors: {
			['&::after']: {
				background: vars.palette.primary.light,
				content: ' ',
				height: '100%',
				position: 'absolute',
				right: 0,
				width: '50%',
				zIndex: '-1',
			},
		},
	},
]);

const dayEndRange = style([
	daySelected,
	{
		position: 'relative',

		selectors: {
			['&::after']: {
				background: vars.palette.primary.light,
				content: ' ',
				height: '100%',
				left: 0,
				position: 'absolute',
				width: '50%',
				zIndex: '-1',
			},
		},
	},
]);

const footer = style({
	alignItems: 'center',
	boxShadow: '0 -2px 10px rgba(141, 141, 141,.3)',
	background: vars.palette.common.gray[1],
	display: 'flex',
	gap: '12px',
	justifyContent: 'flex-end',
	marginTop: '8px',
	padding: '20px',
});

export default {
	root,
	arrowLeft,
	arrowRight,
	calendar,
	day,
	dayEndRange,
	dayInRange,
	dayOfTheWeek,
	daySelected,
	dayStartRange,
	footer,
	grid,
	gridItem,
	header,
	headerDate,
	headerText,
	month,
	monthHeader,
	monthLabel,
};
