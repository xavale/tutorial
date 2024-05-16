import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
	palette: {
		common: {
			black: null,
			white: null,
		},
	},
	typography: {
		fontFamily: null,
		fontSize: {
			1: null,
			2: null,
			3: null,
			4: null,
			5: null,
			6: null,
		},
		letterSpacing: {
			normal: null,
			tight: null,
			relaxed: null,
		},
		lineHeight: {
			normal: null,
			tight: null,
			relaxed: null,
		},
	},
});
