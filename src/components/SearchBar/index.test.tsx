import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '.';

describe('@components/SearchBar', () => {
  const mockOnSearchUserGist = jest.fn();
  const mockOnResetUserGist = jest.fn();
  const component = (
    <SearchBar
      onSearchUserGist={mockOnSearchUserGist}
      onResetUserGist={mockOnResetUserGist}
    />
  );

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
