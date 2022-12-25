import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/emp/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/emp/component/customer',
    title: 'Customers',
    icon: 'bi bi-person-circle',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/emp/component/vehicle',
    title: 'Vehicle & Parts',
    icon: 'bi bi-tools',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/emp/component/booking',
    title: 'Booking',
    icon: 'bi bi-card-text',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/emp/component/in-service',
    title: 'In Service',
    icon: 'bi bi-gear',
    class: '',
    extralink: false,
    submenu: []
  },
];