import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRole from '../store/reducers/role.reducer';
import * as RoleActions from '../store/actions/role.actions';
import { Observable } from 'rxjs';
import * as RoleSelectors from '../store/selectors/role.selectors';
import { Permission } from '../models/role';
import { Resource } from '../models/resource';
import { ResourceService } from './resource.service';
import { map } from 'rxjs/operators';
import { Dictionary } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private store: Store<fromRole.State>, private resourceService: ResourceService) {
    this.loadRoles();
  }

  loadRoles() {
    this.store.dispatch(RoleActions.loadRoles());
  }

  getPermissionsForRoles(roleIds: string[]): Observable<Permission[]> {
    let resourcesDictionary: Dictionary<Resource> = {};

    this.resourceService.getAllAsDictionary().subscribe(dictionary => {
      resourcesDictionary = dictionary;
    });

    return this.store.select(RoleSelectors.selectUniquePermissions, {roleIds})
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
