import paths from '@/routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
  messages?: number;
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader:'Painel',
    path: '/',
    icon: 'solar:widget-bold',
    active: true,
  },
  {
    id: 'analytics',
    subheader: 'Pedidos',
    path: '/',
    icon: 'solar:chart-square-bold',
    active: true,
  },
  {
    id: 'invoice',
    subheader: 'Facturas',
    path: '/',
    icon: 'solar:ticket-bold',
    active: true,
  },
  {
    id: 'schedule',
    subheader: 'Produtos',
    path: '/',
    icon: 'solar:document-text-bold',
    active: true,
  },
    {
    id: 'messages',
    subheader: 'Cliente',
    path: '/',
    icon: 'mage:dashboard-chart-fill',
    active: true,
  },
  {
    id: 'signin',
  subheader: '',
  path: paths.signin,
    }
  ];

export default sitemap;
