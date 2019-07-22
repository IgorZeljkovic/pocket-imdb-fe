export function movieByIdSelector (state) {
  return function (id) {
    return state.movies.all.find(movie => movie.id === parseInt(id));
  }
}