import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies?title=',
  vote: (type, votableId) => `/api/movies/${votableId}/vote/${type}`
};

class MovieService extends ApiService {
  getMovies = params => {
    return this.apiClient.get(`${ENDPOINTS.MOVIES}${params ? params.title : ''}`);
  };

  getMoviesPage = url => {
    return this.apiClient.get(url);
  }

  newVote = ({ type, votableId }) => {
    return this.apiClient.post(ENDPOINTS.vote(type, votableId));
  }

  removeVote = ({ type, votableId }) => {
    return this.apiClient.delete(ENDPOINTS.vote(type, votableId));
  }

  updateVote = ({ type, votableId }) => {
    return this.apiClient.put(ENDPOINTS.vote(type, votableId));
  }
}

export const movieService = new MovieService();
