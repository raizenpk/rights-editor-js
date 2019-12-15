import { TestBed } from '@angular/core/testing';
import { ResourceAPI } from './resource.api';

describe('ResourceAPI', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceAPI = TestBed.get(ResourceAPI);
    expect(service).toBeTruthy();
  });
});
