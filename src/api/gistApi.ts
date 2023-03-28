import {Octokit} from '@octokit/rest';
const octokit = new Octokit();

const getPublicGist = () => octokit.gists.listPublic();

const getUserGist = (username: string) => octokit.gists.listForUser({username});

export {getPublicGist, getUserGist};
