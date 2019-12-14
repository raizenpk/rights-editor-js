import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListView } from './user-list.view';

describe('UserListView', () => {
  let component: UserListView;
  let fixture: ComponentFixture<UserListView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListView ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
