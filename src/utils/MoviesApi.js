import Api from './Api';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const baseUrl = 'https://api.nomoreparties.co';
class MoviesApi extends Api {
  constructor() {
    super({ headers, baseUrl });
  }

  getMovies() {
    return this.get({ url: 'beatfilm-movies' });
  }
}
const moviesApi = new MoviesApi();
export default moviesApi;
