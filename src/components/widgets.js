import { WidgetCard, Home, RecommendedOuterwear, Forecast } from './';

export const widgets = [
	{
		id: 1,
		link: '/home',
		renderCard: () => <WidgetCard msg={'home'} />,
		renderComponent: () => <Home />,
	},
	{
		id: 2,
		link: '/outerwear',
		renderCard: () => <WidgetCard msg={'outerwear'} />,
		renderComponent: () => <RecommendedOuterwear />,
	},
	{
		id: 3,
		link: '/forecast',
		renderCard: () => <WidgetCard msg={'forecast'} />,
		renderComponent: () => <Forecast />,
	},
];
