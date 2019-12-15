import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './store/reducers/core.reducer';
import { CustomSerializer } from './store/reducers/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/effects/core.effects';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultLayout } from './layouts/default/default.layout';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

@NgModule({
  declarations: [
    NavbarComponent,
    DefaultLayout
  ],
  exports: [
    DefaultLayout
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducers),
    EffectsModule.forFeature([ CoreEffects ]),
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomSerializer}
  ]
})
export class CoreModule {
}
