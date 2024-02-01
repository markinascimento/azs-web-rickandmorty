// -> Icons lib
import { Home, MonitorPlay, Star } from 'lucide-react';

export const dataRouter = [
  {
    id: '1',
    label: 'Episodios',
    path: '/',
    Icon: Home
  },

  {
    id: '2',
    label: 'Favoritos',
    path: '/favorite',
    Icon: Star
  },

  {
    id: '3',
    label: 'Continuar assistindo',
    path: '/continue_watching',
    Icon: MonitorPlay
  },
];
