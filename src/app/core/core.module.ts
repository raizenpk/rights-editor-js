import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './store/reducers/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/effects/core.effects';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultLayout } from './layouts/default/default.layout';
import { MatButtonModule, MatDividerModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DefaultLayout,
    PageHeaderComponent
  ],
  exports: [
    DefaultLayout
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducers, {
      initialState: fromCore.initialState
    }),
    EffectsModule.forFeature([ CoreEffects ]),
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatDividerModule
  ]
})
export class CoreModule {
}
