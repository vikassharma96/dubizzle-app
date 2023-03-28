import React from 'react';
import {Screen} from 'react-native-screens';
import renderer from 'react-test-renderer';
import {FILE} from '../../utils/constants';
import AppText from '../AppText';

describe('@components/Screen', () => {
  const component = (
    <Screen>
      <AppText>{FILE}</AppText>
    </Screen>
  );

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
