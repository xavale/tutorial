import { vars } from '@/theme/contract.css';
import { globalStyle } from '@vanilla-extract/css';

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

globalStyle('body', {
	background: vars.palette.common.gray[1],
	minHeight: '100vh',
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
	fontSize: 'inherit',
	fontWeight: 'normal',
	overflowWrap: 'break-word',
});

globalStyle('a', {
	textDecoration: 'none',
	userSelect: 'none',
});

globalStyle('button, input, select, textarea', {
	appearance: 'none',
	font: 'inherit',
	touchAction: 'manipulation',
	userSelect: 'none',
	WebkitTapHighlightColor: 'transparent',
});

globalStyle('canvas, img, picture, svg, video', {
	display: 'block',
	maxWidth: '100%',
});

globalStyle('button, fieldset, input', {
	all: 'unset',
});
