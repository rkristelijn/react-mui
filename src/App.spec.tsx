import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';

import App from './App';

jest.mock('./ProTip', () => () => 'ProTip');

describe('App', () => {
  it('should initiate', () => {
    expect(App).toBeTruthy();
  });

  it('should match snapshop', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
