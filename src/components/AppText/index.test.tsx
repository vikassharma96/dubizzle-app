import React from 'react';
import renderer from 'react-test-renderer';
import AppText from '.';
import {FILES} from '../../utils/constants';

describe('@components/AppText', () => {
  const component = <AppText>{FILES}</AppText>;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
