import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.scss' ]
})
export class UserListComponent {

  @Input() users: User[];
  @Output() editRoles = new EventEmitter<string>();

  private openedDetailsUserId: string;

  constructor() {
  }

  public onEditRolesClicked(userId: string) {
    this.editRoles.emit(userId);
  }

  public onUserDetailsOpened(userId: string) {
    this.openedDetailsUserId = userId;
  }

  public isUserDetailsOpen(userId: string): boolean {
    return this.openedDetailsUserId === userId;
  }

}
