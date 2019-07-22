import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies?title='
};

class MovieService extends ApiService {
  getMovies = params => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES}${params ? params.title : ''}`);
  };

  getMoviesPage = url => {
    return this.apiClient.get(url);
  }
}

export const movieService = new MovieService();
