import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRole from '../store/reducers/role.reducer';
import * as RoleActions from '../store/actions/role.actions';
import { Observable } from 'rxjs';
import * as RoleSelectors from '../store/selectors/role.selectors';
import { Permission, Role } from '../models/role';
import { Resource } from '../models/resource';
import { ResourceService } from './resource.service';
import { first, map } from 'rxjs/operators';
import { Dictionary } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _store: Store<fromRole.State>, private _resourceService: ResourceService) {
    this.loadRoles();
  }

  loadRoles() {
    this._store.dispatch(RoleActions.loadRoles());
  }

  getRoles(): Observable<Role[]> {
    return this._store.select(RoleSelectors.selectAll);
  }

  getPermissionsForRoles(roleIds: string[]): Observable<Permission[]> {
    let resourcesDictionary: Dictionary<Resource> = {};

    this._resourceService.getAllAsDictionary()
      .pipe(first())
      .subscribe(dictionary => {
        resourcesDictionary = dictionary;
      });

    return this._store.select(RoleSelectors.selectUniquePermissions, {roleIds})
      .pipe(map(
        (permissions) => permissions.map(permission => {
          return {
            ...permission,
            resource: resourcesDictionary.hasOwnProperty(permission.resource) ?
              resourcesDictionary[permission.resource].displayName : permission.resource
          };
        })
      ));
  }

}
