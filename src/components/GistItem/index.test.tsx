import React from 'react';
import renderer from 'react-test-renderer';
import GistItem from '.';
import {IGist, IOwner} from '../../types/gist.types';
import {IGistMeta} from '../../types/gistmeta.types';

describe('@components/GistItem', () => {
  const mockGistOwner = {
    login: 'vikassharma96',
    id: 51054221,
    node_id: 'MDQ6VXNlcjUxMDU0MjIx',
    avatar_url: 'https://avatars.githubusercontent.com/u/51054221?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/vikassharma96',
    html_url: 'https://github.com/vikassharma96',
    followers_url: 'https://api.github.com/users/vikassharma96/followers',
    following_url:
      'https://api.github.com/users/vikassharma96/following{/other_user}',
    gists_url: 'https://api.github.com/users/vikassharma96/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/vikassharma96/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/vikassharma96/subscriptions',
    organizations_url: 'https://api.github.com/users/vikassharma96/orgs',
    repos_url: 'https://api.github.com/users/vikassharma96/repos',
    events_url: 'https://api.github.com/users/vikassharma96/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/vikassharma96/received_events',
    type: 'User',
    site_admin: false,
  } as IOwner;
  const mockGistMeta = {
    files: {
      'pagination.js': {
        filename: 'pagination.js',
        type: 'application/javascript',
        language: 'JavaScript',
        raw_url:
          'https://gist.githubusercontent.com/vikassharma96/6ba7b96eaf7c7ea509f35d8451eed87e/raw/ad9d448678b01d33c6ff147b611b3bfcff816195/pagination.js',
        size: 2414,
      },
    },
    html_url:
      'https://gist.github.com/vikassharma96/6ba7b96eaf7c7ea509f35d8451eed87e',
    forks_url:
      'https://api.github.com/gists/6ba7b96eaf7c7ea509f35d8451eed87e/forks',
    comments_url:
      'https://api.github.com/gists/6ba7b96eaf7c7ea509f35d8451eed87e/comments',
    comments: 0,
    created_at: '2020-08-21T01:52:25Z',
    updated_at: '2020-08-21T01:52:26Z',
    description: 'Pagination in react native',
  } as IGistMeta;

  const mockGist = {
    owner: mockGistOwner,
    ...mockGistMeta,
  } as IGist;

  const navigate = jest.fn();

  const component = <GistItem gist={mockGist} navigation={{navigate}} />;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
