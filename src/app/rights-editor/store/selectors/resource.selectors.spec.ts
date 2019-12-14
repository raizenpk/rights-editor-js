import * as fromResource from '../reducers/resource.reducer';
import { selectResourceState } from './resource.selectors';

describe('Resource Selectors', () => {
  it('should select the feature state', () => {
    const result = selectResourceState({
      [fromResource.resourceFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
