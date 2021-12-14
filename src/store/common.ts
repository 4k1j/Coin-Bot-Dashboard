import { atom } from 'recoil';

export const sidebarOpen = atom<boolean>({
  key: 'sidebar-open',
  default: false,
});
