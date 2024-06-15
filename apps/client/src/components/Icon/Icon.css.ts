import { trigger } from '@/components/ServicesWidget/ServicesWidget.css';
import { vars } from '@/theme/contract.css';
import { style } from '@vanilla-extract/css';

export const base = style({
	fill: vars.palette.primary.dark,
	flexShrink: 0,

	selectors: {
		[`${trigger}:hover &`]: {
			fill: vars.palette.primary.main,
		},
		[`${trigger}[data-state='active'] &`]: {
			fill: vars.palette.primary.main,
		},
	},
});

const root = style({
	fill: vars.palette.primary.dark,
	flexShrink: 0,
});

export default {
	root,
};
