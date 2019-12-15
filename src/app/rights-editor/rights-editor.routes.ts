import { Routes } from '@angular/router';
import { UserListView } from './views/user-list/user-list.view';

export const routes: Routes = [
  {
    path: 'users',
    component: UserListView,
    data: {title: UserListView.PAGE_TITLE}
  },
];
