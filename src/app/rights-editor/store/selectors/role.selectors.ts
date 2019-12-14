import { createFeatureSelector } from '@ngrx/store';
import * as fromRole from '../reducers/role.reducer';

export const selectRoleState = createFeatureSelector<fromRole.State>(
  fromRole.roleFeatureKey
);
