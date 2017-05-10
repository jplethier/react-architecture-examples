import axios from 'axios';

export function getMovie(movieId) {
  return axios.get('http://www.omdbapi.com/', { params: { i: movieId, plot: 'full' } })
    .then((res) => (
      res.data
    ));
}
