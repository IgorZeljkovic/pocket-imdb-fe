import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies'
};

class MovieService extends ApiService {
  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };

  getMoviesPage = url => {
    return this.apiClient.get(url);
  }
}

export const movieService = new MovieService();
