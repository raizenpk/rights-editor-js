import { TestBed } from '@angular/core/testing';

import { RoleAPI } from './role.api';

describe('RoleAPI', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleAPI = TestBed.get(RoleAPI);
    expect(service).toBeTruthy();
  });
});
