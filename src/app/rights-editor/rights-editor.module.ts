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
import { MatButtonModule, MatChipsModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list/user-list-item/user-list-item.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';

@NgModule({
  declarations: [ UserListView, UserListComponent, UserListItemComponent, ResourceListComponent ],
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
    MatButtonModule,
    MatChipsModule
  ]
})
export class RightsEditorModule {
}
