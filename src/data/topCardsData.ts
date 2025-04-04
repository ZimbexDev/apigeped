export interface TopCard {
  id: string | number;
  icon: string;
  title: string;
  count: number;
  iconColor: string;
  iconBg: string;
}

export const topCardsData: TopCard[] = [
 /* {
    id: 1,
    icon: 'mage:heart-fill',
    title: 'Save Products',
    count: 178,
    iconColor: 'secondary.main',
    iconBg: 'transparent.secondary.main',
  },*/
  {
    id: 2,
    icon: 'solar:gamepad-old-bold',
    title: 'Activos',
    count: 23,
    iconColor: 'warning.main',
    iconBg: 'transparent.warning.main',
  },
  {
    id: 3,
    icon: 'solar:bag-4-bold',
    title: 'Entregues',
    count: 5,
    iconColor: 'error.light',
    iconBg: 'transparent.error.light',
  },
  {
    id: 4,
    icon: 'heroicons:briefcase-20-solid',
    title: 'Atrasados',
    count: 1,
    iconColor: 'primary.main',
    iconBg: 'transparent.primary.main',
  },
];
