import { Route } from '@angular/router';
import { IntrefaceMenu } from './ui/components/menu/interface-menu';

export const appMenu: IntrefaceMenu[] = [
  {
    id: 1,
    title: 'menu.home',
    url: ['/'],
    icon: 'home'
  }
];
export const appRoutes: Route[] = [];
