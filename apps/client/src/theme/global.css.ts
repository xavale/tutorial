import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/theme/contract.css';

globalStyle('*', {
	margin: 0,
});

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
});

globalStyle('body, html', {
	color: vars.palette.common.black,
	fontFamily: vars.typography.fontFamily,
	fontSize: vars.typography.fontSize[3],
	letterSpacing: vars.typography.letterSpacing.normal,
	lineHeight: vars.typography.lineHeight.normal,
	padding: 0,
	WebkitFontSmoothing: 'antialiased',
	WebkitTextSizeAdjust: '100%',
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
	fontWeight: 'normal',
	overflowWrap: 'break-word',
});

globalStyle('button, input, select, textarea', {
	font: 'inherit',
});

globalStyle('canvas, img, picture, svg, video', {
	display: 'block',
	maxWidth: '100%',
});

