import { CarIcon } from '@/components/Icon/CarIcon';
import { FlightIcon } from '@/components/Icon/FlightIcon';
import { HotelIcon } from '@/components/Icon/HotelIcon';
import { MoneyIcon } from '@/components/Icon/MoneyIcon';
import { PackageIcon } from '@/components/Icon/PackageIcon';
import { PhoneIcon } from '@/components/Icon/PhoneIcon';

export const services = [
	{
		code: 'cars',
		name: 'Autos',
		shortDescription: 'Una breve descrición del servicio',
		link: '/cars',
		icon: CarIcon,
	},
	{
		code: 'flights',
		name: 'Vuelos',
		link: '/flights',
		shortDescription: 'Una breve descrición del servicio',
		icon: FlightIcon,
	},
	{
		code: 'stays',
		name: 'Hoteles',
		link: '/stays',
		shortDescription: 'Una breve descrición del servicio',
		icon: HotelIcon,
	},
	{
		code: 'packages',
		name: 'Envíos',
		link: '/packages',
		shortDescription: 'Una breve descrición del servicio',
		icon: PackageIcon,
	},
	{
		code: 'send-money',
		name: 'Remesas',
		link: '/send-money',
		shortDescription: 'Una breve descrición del servicio',
		icon: MoneyIcon,
	},
	{
		code: 'phone',
		name: 'Recargas',
		link: '/phone',
		shortDescription: 'Una breve descrición del servicio',
		icon: PhoneIcon,
	},
];
