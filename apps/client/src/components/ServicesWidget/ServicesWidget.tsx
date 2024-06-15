'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { services } from '@/data/services';
import * as Tabs from '@radix-ui/react-tabs';
import { CarsWidget } from './CarsWidget';
import { FlightsWidget } from './FilghtsWidget';
import { content, list, root, trigger } from './ServicesWidget.css';

export const ServicesWidget = () => {
	return (
		<Tabs.Root className={root} defaultValue={services[0].code}>
			<Tabs.List className={list} aria-label={'Selecciona el servicio'}>
				{services.map((service) => (
					<Tabs.Trigger key={service.code} className={trigger} value={service.code}>
						<service.icon />
						<span>{service.name}</span>
					</Tabs.Trigger>
				))}
			</Tabs.List>
			{services.map((service) => (
				<Tabs.Content key={service.code} className={content} value={service.code}>
					{service.code === 'cars' && <CarsWidget />}
					{service.code === 'flights' && <FlightsWidget />}
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
};
