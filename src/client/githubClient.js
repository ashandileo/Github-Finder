import client from './apiClient';

const getUsersList = params => {
  const url = 'search/users';
  return client(url, { params: params });
}

const getUserDetail = username => {
  const url = `users/${username}`;
  return client(url);
}

const getRepos = username => {
  const url = `users/${username}/repos`;
  return client(url);
}

export {
  getUsersList,
  getUserDetail,
  getRepos
}