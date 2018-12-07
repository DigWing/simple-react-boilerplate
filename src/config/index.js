const host = 'https://www.reddit.com/r';

export const endpoints = {
  getRedditUrl: ({ redditName = 'reactjs' } = { redditName: '' }) => `${host}/${redditName}.json`,
};
