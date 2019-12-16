import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRole from '../reducers/role.reducer';
import { Permission, Role } from '../../models/role';

export const selectRoleState = createFeatureSelector<fromRole.State>(
  fromRole.roleFeatureKey
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = fromRole.adapter.getSelectors(selectRoleState);

export const selectUniquePermissions = createSelector(
  selectAll,
  (
    roles: Role[],
    props: { roleIds: string[] }
  ) => {
    const uniquePermissions: Permission[] = [];
    const uniquePermissionIds = [];

    roles.filter(role => props.roleIds.includes(role.id))
      .map(role => role.permissions).forEach(rolePermissions => {
      rolePermissions.forEach(permission => {
        if (!uniquePermissionIds.includes(permission.resource)) {
          uniquePermissionIds.push(permission.resource);
          uniquePermissions.push({
            resource: permission.resource,
            operation: [ ...permission.operation ]
          });
        } else {
          const uniquePermission = uniquePermissions.find(evaluatedPermission => evaluatedPermission.resource === permission.resource);
          permission.operation.forEach(operation => {
            if (!uniquePermission.operation.includes(operation)) {
              uniquePermission.operation.push(operation);
            }
          });
        }
      });
    });

    return uniquePermissions;
  }
);
