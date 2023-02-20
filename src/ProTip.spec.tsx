import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';

import ProTip from './ProTip';

jest.mock('./LightBulbIcon', () => 'LightBulbIcon');

describe('ProTip', () => {
  it('should initiate', () => {
    expect(ProTip).toBeTruthy();
  });

  it('should match snapshop', () => {
    const component = renderer.create(<ProTip />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
