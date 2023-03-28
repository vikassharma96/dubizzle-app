import React from 'react';
import renderer from 'react-test-renderer';
import LineSeperator from '.';

describe('@components/LineSeperator', () => {
  const component = <LineSeperator />;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
