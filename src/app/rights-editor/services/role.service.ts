import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRole from '../store/reducers/role.reducer';
import * as RoleActions from '../store/actions/role.actions';
import { Observable } from 'rxjs';
import * as RoleSelectors from '../store/selectors/role.selectors';
import { Permission } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private store: Store<fromRole.State>) {
    this.loadRoles();
  }

  loadRoles() {
    this.store.dispatch(RoleActions.loadRoles());
  }

  getPermissionsForRoles(roleIds: string[]): Observable<Permission[]> {
    return this.store.select(RoleSelectors.selectUniquePermissions, {roleIds});
  }

}
