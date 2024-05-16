import { createTheme } from '@vanilla-extract/css';
import { vars } from '@/theme/contract.css'

export const themeClass = createTheme(vars, {
  palette: {
		common: {
			black: '#000',
			white: 'fff',
		},
	},
	typography: {
		fontFamily: '"Poppins", sans-serif',
		fontSize: {
			1: '12px',
			2: '14px',
			3: '16px',
			4: '18px',
			5: '20px',
			6: '24px',
		},
		letterSpacing: {
			normal: 'normal',
			tight: '-0.5px',
			relaxed: '1px',
		},
		lineHeight: {
			normal: '115%',
			tight: '100%',
			relaxed: '125%',
		},
	},
});