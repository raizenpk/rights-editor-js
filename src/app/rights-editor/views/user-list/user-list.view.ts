import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-user-list',
  templateUrl: './user-list.view.html',
  styleUrls: [ './user-list.view.css' ]
})
export class UserListView implements OnInit {
  public static PAGE_TITLE = 'User List';

  public users$ = this.userService.getUsers();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.loadUsers();
  }

}
