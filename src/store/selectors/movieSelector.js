export function movieByIdSelector (state) {
  return function (id) {
    return state.movie.all.find(movie => movie.id === parseInt(id));
  }
}