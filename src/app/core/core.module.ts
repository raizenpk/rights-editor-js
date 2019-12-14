import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './store/reducers/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/effects/core.effects';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultLayout } from './layouts/default/default.layout';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

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
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducer),
    EffectsModule.forFeature([ CoreEffects ]),
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CoreModule {
}
