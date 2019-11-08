import axios from 'axios';

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE'

export const fetchMovies = () => dispatch => {
    dispatch({type: FETCH_MOVIES_START});
    axios
        .get('http://localhost:5000/api/movies')
        .then(res => dispatch({type: FETCH_MOVIES_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: FETCH_MOVIES_FAILURE, payload: err.response}));
}

export const POST_NEW_MOVIE_START = 'POST_NEW_MOVIE_START'
export const POST_NEW_MOVIE_SUCCESS = 'POST_NEW_MOVIE_SUCCESS'
export const POST_NEW_MOVIE_FAILURE = 'POST_NEW_MOVIE_FAILURE'

export const postMovie = (movie) => dispatch => {
    dispatch({type: POST_NEW_MOVIE_START});
    axios
        .post('http://localhost:5000/api/movies', movie)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response));
}