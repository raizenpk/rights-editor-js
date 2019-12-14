import * as fromRole from '../reducers/role.reducer';
import { selectRoleState } from './role.selectors';

describe('Role Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRoleState({
      [fromRole.roleFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
