import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ResourceEffects } from './resource.effects';

describe('ResourceEffects', () => {
  const actions$: Observable<any>;
  let effects: ResourceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResourceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ResourceEffects>(ResourceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
