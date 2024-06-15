import { Header } from '@/components/Header/Header';
import '@/theme/global.css';
import { themeClass as lightTheme } from '@/theme/light/theme.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tutorial',
	description: 'This is the tutorial app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={lightTheme} lang={'es'}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
