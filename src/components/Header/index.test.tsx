import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';

describe('@components/Header', () => {
  const mockOnSearchUserGist = jest.fn();
  const mockOnResetUserGist = jest.fn();
  const component = (
    <Header
      onSearchUserGist={mockOnSearchUserGist}
      onResetUserGist={mockOnResetUserGist}
    />
  );

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
