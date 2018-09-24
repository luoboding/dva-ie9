import fetch from 'dva/fetch';
import Cookies from 'js-cookie';
import Configuration from '../env.config';

function parseJSON(response) {
  return response.json();
}
/**
 * Pre check http status.
 *
 * @param {object}  response  A response of http request
 */
function checkStatus(response) {
  const [resolved, raw] = response;
  if ((raw.status >= 200 && raw.status < 300) || raw.status === 404) {
    return resolved;
  }
  if (raw.status === 401) {
    window.localStorage.clear();
    throw new Error('请登录');
  } else if (raw.status === 403) {
    throw new Error('你不能进行此操作!');
  } else {
    throw new Error(resolved ? resolved.msg : raw.statusText);
  }
}

function generateUrl(url) {
  return `${Configuration.api}/gateway/authority/api/home/${url}`;
}

function toJson(raw) {
  let resolved = null;
  if (raw.status !== 404) {
    resolved = parseJSON(raw);
  }
  return Promise.all([resolved, raw]);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function genreateRequest(url, options) {
  return fetch(generateUrl(url), options)
    .then(toJson)
    .then(checkStatus);
}

/**
 * Generate the header of request
 *
 * @param  {string} method   The Methon of http
 * @return {object}          A http request header
 */
function genrateRequestHeader(method) {
  const header = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    // credentials: 'include',
  };
  try {
    Object.assign(header.headers, {
      Authorization: `Bearer ${Cookies.get('token') ? Cookies.get('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGFpbSIsImJ1c2luZXNzR3JvdXBJZCI6IjEwMSIsImlzcyI6IlNlcnZpY2UiLCJwZXJzb25JZCI6IjIwMTg5NCIsInVzZXJOYW1lIjoi6auY5Luy5piOIiwiZXhwIjoxNTQwMDAxOTMwLCJpYXQiOjE1Mzc0MDk5MzAsIm9yZ0lkIjoiMjQzMTgiLCJlbXBsb3llZU51bWJlciI6IjAwMDI0ODMifQ.MmqXE6ppcTE2_nxT-5Ho1H3j30EftBjObIX74z7nXVQ'}`,
    });
  } catch (e) {
    return header;
  }
  return header;
}

const Request = {
  post(url, data) {
    const body = JSON.stringify(data);
    return genreateRequest(url, { ...genrateRequestHeader('POST'), body });
  },
  patch(url, data) {
    const body = JSON.stringify(data);
    return genreateRequest(url, { ...genrateRequestHeader('PATCH'), body });
  },
  put(url, data) {
    const body = JSON.stringify(data);
    return genreateRequest(url, { ...genrateRequestHeader('put'), body });
  },
  get(url) {
    return genreateRequest(url, { ...genrateRequestHeader('GET') });
  },
  delete(url) {
    return genreateRequest(url, { ...genrateRequestHeader('DELETE') });
  },
};

export default Request;


export const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get('token') ? Cookies.get('token') : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGFpbSIsImJ1c2luZXNzR3JvdXBJZCI6IjEwMSIsImlzcyI6IlNlcnZpY2UiLCJwZXJzb25JZCI6IjIwMTg5NCIsInVzZXJOYW1lIjoi6auY5Luy5piOIiwiZXhwIjoxNTM5OTI3ODIwLCJpYXQiOjE1MzczMzU4MjAsIm9yZ0lkIjoiMjQzMTgiLCJlbXBsb3llZU51bWJlciI6IjAwMDI0ODMifQ.my3F7lDdXXbLd4H6uOOMYWcogfqDRD3Aa-UhLigGc8I'}`,
  };
};
