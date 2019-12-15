import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import * as fromRole from './store/reducers/role.reducer';
import { RoleEffects } from './store/effects/role.effects';
import * as fromResource from './store/reducers/resource.reducer';
import { ResourceEffects } from './store/effects/resource.effects';
import { CoreModule } from '../core/core.module';
import { UserListView } from './views/user-list/user-list.view';
import { RouterModule } from '@angular/router';
import { routes } from './rights-editor.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list/user-list-item/user-list-item.component';
import { UserPermissionsComponent } from './components/user-permissions/user-permissions.component';
import { MatExpansionModule } from '@angular/material/typings/esm5/expansion';
import { MatChipsModule } from '@angular/material/typings/esm5/chips';

@NgModule({
  declarations: [ UserListView, UserListComponent, UserListItemComponent, UserPermissionsComponent ],
  imports: [
    CommonModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([ UserEffects, RoleEffects, ResourceEffects ]),
    StoreModule.forFeature(fromRole.roleFeatureKey, fromRole.reducer),
    StoreModule.forFeature(fromResource.resourceFeatureKey, fromResource.reducer),
    RouterModule.forChild(routes),
    HttpClientModule,
    MatExpansionModule,
    MatChipsModule
  ]
})
export class RightsEditorModule {
}
