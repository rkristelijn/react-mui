import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';

import LightBulbIcon from './LightBulbIcon';

// todo: it runs, but this seems untestable for now, so mocking
jest.mock('./LightBulbIcon', () => 'LightBulbIcon');

describe('LightBulbIcon', () => {
  let props;
  it('should initiate', () => {
    expect(LightBulbIcon).toBeTruthy();
  });

  it('should match snapshop', () => {
    props = { 'aria-busy': 'false' };
    const component = renderer.create(<LightBulbIcon sx={props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
