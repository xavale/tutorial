'use client';

import { services } from '@/data/services';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronIcon } from '../Icon/ChevronIcon';
import {
	content,
	list,
	position,
	root,
	serviceDescription,
	serviceLink,
	serviceList,
	serviceListItem,
	serviceName,
	trigger,
	viewport,
} from './Navigation.css';

export const Navigation = () => {
	return (
		<NavigationMenu.Root className={root}>
			<NavigationMenu.List className={list}>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={trigger}>
						Servicios <ChevronIcon />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className={content}>
						<ul className={serviceList}>
							{services.map((service) => (
								<li className={serviceListItem} key={service.code}>
									<a className={serviceLink} href={service.link}>
										<h5 className={serviceName}>{service.name}</h5>
										<p className={serviceDescription}>{service.shortDescription}</p>
									</a>
								</li>
							))}
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link className={trigger} href={'/customer-service'}>
						Atención al cliente
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link className={trigger} href={'/sign-in'}>
						Iniciar sesión
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				{/* <NavigationMenu.Indicator className={indicator}>
					<div className={arrow} />
				</NavigationMenu.Indicator> */}
			</NavigationMenu.List>

			<div className={position}>
				<NavigationMenu.Viewport className={viewport} />
			</div>
		</NavigationMenu.Root>
	);
};
