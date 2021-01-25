import { SideMenuLink } from '../app/interfaces/side-menu-link';

export const sideMenu: SideMenuLink[] = [
    {
        title: 'Sell',
        url: '/sell',
    },
    {
        title: 'Categories',
        url: '#',
        submenu: {
            type: 'menu',
            links: [
                {title: 'Sneakers', url: '/'},
                {title: 'Apparel', url: '/'},
                {title: 'Accessories', url: '/'},
            ],
        },
    },
	{
        title: 'Feed',
        url: '/',
    },
    {
        title: 'Account',
        url: '#',
        submenu: {
            type: 'menu',
            links: [
                {title: 'Profile', url: '/'},
                {title: 'Portfolio', url: '/'},
                {title: 'Seller Dashboard', url: '/'},
				{title: 'Orders', url: '/'},
				{title: 'Settings', url: '/'},
            ],
        },
    },
	{
        title: 'Wishlist',
        url: '/',
    },
	{
        title: 'Settings',
        url: '/',
    },
];
