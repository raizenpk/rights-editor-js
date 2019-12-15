import { Component, Inject, InjectionToken } from '@angular/core';

export const APP_TITLE = new InjectionToken<string>('app_title');

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent {

  constructor(@Inject(APP_TITLE) public appTitle: string) {
  }

}
