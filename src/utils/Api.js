function checkResponse(res) {
  if (res && res.ok) {
    return res.json();
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return res.json().then((doc) => Promise.reject({ code: res.status, ...doc }));
}
class Api {
  constructor({ headers, baseUrl, credentials = 'omit' }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
    this._credentials = credentials;
  }

  post({ values, url }) {
    return fetch(`${this._baseUrl}/${url}`, {
      method: 'POST',
      body: JSON.stringify(values),
      credentials: this._credentials,
      headers: this._headers,
    }).then(checkResponse);
  }

  patch({ values, url }) {
    return fetch(`${this._baseUrl}/${url}`, {
      method: 'PATCH',
      body: JSON.stringify(values),
      credentials: this._credentials,
      headers: this._headers,
    }).then(checkResponse);
  }

  delete({ id, url }) {
    return fetch(`${this._baseUrl}/${url}/${id}`, {
      method: 'DELETE',
      credentials: this._credentials,
      headers: this._headers,
    }).then(checkResponse);
  }

  get({ url }) {
    return fetch(`${this._baseUrl}/${url}`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    }).then(checkResponse);
  }
}
export default Api;
