import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RightsEditorModule } from './rights-editor/rights-editor.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BASE_API_URL } from './rights-editor/api';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { APP_TITLE as APP_TITLE_TOKEN } from './core/components/navbar/navbar.component';
import { environment } from '../environments/environment';

const APP_TITLE = 'Rights Editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ?
      StoreDevtoolsModule.instrument({
        maxAge: 25
      })
      : [],
    RouterModule.forRoot(appRoutes),
    CoreModule,
    RightsEditorModule,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: BASE_API_URL,
      useValue: 'https://my-json-server.typicode.com/tudor-ttv/interview'
    },
    {
      provide: APP_TITLE_TOKEN,
      useValue: APP_TITLE
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
