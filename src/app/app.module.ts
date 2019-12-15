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

const APP_TITLE = 'Rights Editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(appRoutes),
    CoreModule.forRoot(APP_TITLE),
    RightsEditorModule,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [ {
    provide: BASE_API_URL,
    useValue: 'https://my-json-server.typicode.com/tudor-ttv/interview'
  } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
