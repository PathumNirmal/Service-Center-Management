import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/admin/component/employee',
    title: 'Employees',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/admin/component/customer',
    title: 'Customers',
    icon: 'bi bi-person-circle',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/admin/component/vehicle',
    title: 'Vehicle & Parts',
    icon: 'bi bi-tools',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/admin/component/customer_vehicles',
    title: "Customer's Vehicle Details",
    icon: 'bi bi-car-front',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/admin/component/booking',
    title: 'Booking',
    icon: 'bi bi-card-text',
    class: '',
    extralink: false,
    submenu: []
  },
];