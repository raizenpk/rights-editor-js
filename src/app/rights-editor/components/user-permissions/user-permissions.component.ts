import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Permission } from '../../models/role';
import { ResourceService } from '../../services/resource.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: [ './user-permissions.component.css' ]
})
export class UserPermissionsComponent implements OnChanges, OnDestroy {

  @Input() roles: string[];

  public permissions: Permission[] = [];

  private _ngUnsubscribe$ = new Subject();

  constructor(private roleService: RoleService, private resourceService: ResourceService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.roles && this.roles && this.roles.length) {
      this._ngUnsubscribe$.next();
      this.roleService.getPermissionsForRoles(this.roles)
        .pipe(takeUntil(this._ngUnsubscribe$))
        .subscribe(permissions => {
          this.permissions = permissions;
        });
    }
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }

}
