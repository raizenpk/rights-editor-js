import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Role } from '../../models/role';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-role-edit-dialog',
  templateUrl: './role-edit-dialog.component.html',
  styleUrls: [ './role-edit-dialog.component.css' ]
})
export class RoleEditDialogComponent implements OnInit {

  @Output() selectedRolesChanged = new EventEmitter<string[]>();

  public form;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RoleEditDialogData,
    private _dialogRef: MatDialogRef<RoleEditDialogComponent>,
    private _formBuilder: FormBuilder
  ) {
    const formConfig = {};
    this.data.roles.forEach(role => {
      formConfig[role.id] = [ this.data.selectedRoleIds.includes(role.id) ];
    });

    this.form = this._formBuilder.group(formConfig);
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(selectedRolesMap => {
      this.selectedRolesChanged.emit(
        Object.keys(selectedRolesMap).filter(roleId =>
          selectedRolesMap[roleId] === true
        )
      );
    });
  }

}

export interface RoleEditDialogData {
  userId: string;
  selectedRoleIds: string[];
  roles: Role[];
}
