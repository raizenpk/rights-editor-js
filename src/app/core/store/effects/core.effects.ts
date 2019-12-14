import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CoreActions } from '../actions/core.actions';

@Injectable()
export class CoreEffects {

  constructor(private actions$: Actions<CoreActions>) {
  }

}
