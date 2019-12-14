import { Action } from '@ngrx/store';

export enum ResourceActionTypes {
  LoadResources = '[Resource] Load Resources',


}

export class LoadResources implements Action {
  readonly type = ResourceActionTypes.LoadResources;
}


export type ResourceActions = LoadResources;
