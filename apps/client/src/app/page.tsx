import { Banner } from '@/components/Banner/Banner';
import { constrain } from '@/components/Page/Page.css';
import { ServicesWidget } from '@/components/ServicesWidget/ServicesWidget';

export default function Home() {
	const banner = {
		title: 'Reserva tu viaje a Cuba',
		description:
			'Con Viajes Pinar podrás reservar tu viaje a Cuba de forma rápida y segura. Contamos con un amplio catálogo de carros de alquiler en toda la isla.',
		link: {
			path: '/autos',
			label: 'Ver más',
		},
		image: {
			path: '/banner.jpg',
			description: 'Escena callejera con autos antiguos clásicos y coloridos edificios tradicionales en el centro de La Habana, Cuba',
		},
	};
	return (
		<main>
			<div className={constrain}>
				<ServicesWidget />
				<Banner {...banner} />
			</div>
		</main>
	);
}
