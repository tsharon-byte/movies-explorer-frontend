import Api from './Api';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const baseUrl = 'https://api.diploma.tsharon.nomoredomains.club';
class MainApi extends Api {
  constructor() {
    super({ headers, baseUrl, credentials: 'include' });
  }

  postSignUp = (values) => this.post({ values, url: 'signup' });

  signOut = () => this.post({ url: 'signout' });

  postLogin = (values) => this.post({ values, url: 'signin' });

  saveMovie = (values) => this.post({ values, url: 'movies' });

  getMovies = () => this.get({ url: 'movies' });

  getMe = () => this.get({ url: 'users/me' });

  deleteMovie = (id) => this.delete({ id, url: 'movies' });

  patchUser = (values) => this.patch({ values, url: 'users/me' });
}
const mainApi = new MainApi();
export default mainApi;
