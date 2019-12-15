import { createAction, props } from '@ngrx/store';
import { Resource } from '../../models/resource';

const PREFIX = '[Resource] ';

export const loadResources = createAction(
  PREFIX + 'loadResources'
);

export const loadResourcesSuccess = createAction(
  PREFIX + 'loadResourcesSuccess',
  props<{ resources: Resource[] }>()
);

export const loadResourcesFailure = createAction(
  PREFIX + 'loadResourcesFailure',
  props<{ error: any }>()
);
