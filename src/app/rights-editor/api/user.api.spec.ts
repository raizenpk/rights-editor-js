import { TestBed } from '@angular/core/testing';

import { UserAPI } from './user.api';

describe('UserAPI', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAPI = TestBed.get(UserAPI);
    expect(service).toBeTruthy();
  });
});
