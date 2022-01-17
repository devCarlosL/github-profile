/* eslint-disable camelcase */
import http from '../config/axios';

export const getUser = async ({ username }) => {
  const { data } = await http.get(`/users/${username}`);

  return data;
};

export const getUserRepos = async ({ username }) => {
  const { data } = await http.get(`/users/${username}/repos`);

  return data.map(({ id, name, html_url }) => ({
    id,
    name,
    html_url,
  }));
};

export const getUserStarred = async ({ username }) => {
  const { data } = await http.get(`/users/${username}/starred`);

  return data.map(({ id, name, html_url }) => ({
    id,
    name,
    html_url,
  }));
};

export const getFollowers = async ({ username }) => {
  const { data } = await http.get(`/users/${username}/followers`);

  return data.map(({ id, login, html_url }) => ({
    id,
    login,
    html_url,
  }));
};
