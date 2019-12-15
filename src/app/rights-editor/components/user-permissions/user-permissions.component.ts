import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Permission } from '../../models/role';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: [ './user-permissions.component.css' ]
})
export class UserPermissionsComponent implements OnChanges {

  @Input() roles: string[];

  public permissions: Permission[] = [];

  constructor(private roleService: RoleService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.roles && this.roles && this.roles.length) {
      this.roleService.getPermissionsForRoles(this.roles).subscribe(permissions => {
        this.permissions = permissions;
      });
    }
  }

}
