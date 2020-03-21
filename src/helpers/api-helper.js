import fetch from 'isomorphic-unfetch';
import { API } from '../config';

const adjustURL = (url) => {
  if (url.startsWith('/')) {
    return url.substring(1);
  }
  return url;
};

export const GetRequest = async (url) => {
  url = adjustURL(url);
  console.log(`Get request to: ${API}${url}`);
  return fetch(`${API}${url}`);
};

export const PostRequest = async (url, body) => {
  url = adjustURL(url);
  return fetch(`${API}${url}`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    },
  });
};
