import { vars } from '@/theme/contract.css';
import { createTheme } from '@vanilla-extract/css';

export const themeClass = createTheme(vars, {
	palette: {
		common: {
			black: '#000',
			white: '#FFF',
			gray: {
				1: '#F9F9F9',
				2: '#E8E8E8',
				3: '#CECECE',
				4: '#8D8D8D',
			},
		},
		primary: {
			main: '#027864',
			light: '#F2FBF9',
			dark: '#16433C',
		},
	},
	typography: {
		fontFamily: '"Poppins", sans-serif',
		fontSize: {
			1: '12px',
			2: '14px',
			3: '16px',
			4: '20px',
			5: '24px',
			6: '28px',
		},
		letterSpacing: {
			normal: 'normal',
			tight: '-0.5px',
			relaxed: '1px',
		},
		lineHeight: {
			normal: '1.15',
			tight: '1',
			relaxed: '1.25',
		},
	},
});
