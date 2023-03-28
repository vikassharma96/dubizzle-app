import React from 'react';
import renderer from 'react-test-renderer';
import Info from '.';

describe('@components/AppText', () => {
  const mockRoute = {params: 'https://www.google.com'};
  const component = <Info route={mockRoute} />;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
