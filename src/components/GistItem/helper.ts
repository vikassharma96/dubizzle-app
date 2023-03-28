import {IGist} from '../../types/gist.types';
import {IGistMeta} from '../../types/gistmeta.types';

const getGistMeta = (gist: IGist): IGistMeta => {
  const {
    files = {},
    html_url,
    forks_url,
    comments_url,
    comments = 0,
    description = '',
    created_at,
    updated_at,
  } = gist;
  return {
    files,
    html_url,
    forks_url,
    comments_url,
    comments,
    description,
    created_at,
    updated_at,
  };
};

export {getGistMeta};
