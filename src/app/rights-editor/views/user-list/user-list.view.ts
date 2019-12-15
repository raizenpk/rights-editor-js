import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material';
import { RoleEditDialogComponent, RoleEditDialogData } from '../../components/role-edit-dialog/role-edit-dialog.component';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-view-user-list',
  templateUrl: './user-list.view.html',
  styleUrls: [ './user-list.view.css' ]
})
export class UserListView implements OnInit, OnDestroy {
  public static PAGE_TITLE = 'User List';

  public users$ = this._userService.getUsers();
  public roles: Role[] = [];

  private _ngUnsubscribe$ = new Subject();

  constructor(private _userService: UserService,
              private _roleService: RoleService,
              private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._roleService.getRoles()
      .pipe(takeUntil(this._ngUnsubscribe$))
      .subscribe(roles => {
        this.roles = roles;
      });
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe$.next();
    this._ngUnsubscribe$.complete();
  }

  public onEditRoles(userId: string) {
    this._userService.getUserById(userId).pipe(first()).subscribe(user => {
      this.openEditRolesDialog(user.id, user.roles);
    });
  }

  private onSelectedRolesChanged(userId) {
    return (selectedRoleIds: string[]) => {
      this._userService.patchUser(userId, {roles: selectedRoleIds});
    };
  }

  private openEditRolesDialog(userId: string, selectedRoleIds: string[]) {
    const data: RoleEditDialogData = {
      userId,
      selectedRoleIds,
      roles: this.roles
    };

    const ref = this._dialog.open(RoleEditDialogComponent, {
      width: '500px',
      data
    });

    ref.componentInstance.selectedRolesChanged
      .pipe(takeUntil(ref.afterClosed()))
      .subscribe(this.onSelectedRolesChanged(userId));

    return ref;
  }

}
