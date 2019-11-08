import {FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, POST_NEW_MOVIE_SUCCESS, POST_NEW_MOVIE_START, POST_NEW_MOVIE_FAILURE} from '../actions/movieActions';

const initialState = {
    isFetching: false,
    movieData: [],
    errors: null
}

export const movieReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_START:
            return {...state, isFetching: true, errors: null, movieData: []}
        case FETCH_MOVIES_SUCCESS:
            return {...state, isFetching: false, errors: null, movieData: action.payload}
        case FETCH_MOVIES_FAILURE:
            return {...state, isFetching: false, errors: action.payload, movieData: []}
        case POST_NEW_MOVIE_START:
            return {...state, isFetching: true, errors: null, movieData: []}
        case POST_NEW_MOVIE_SUCCESS:
            return {...state, isFetching: false, errors: null, movieData: action.payload}
        case POST_NEW_MOVIE_FAILURE:
            return {...state, isFetching: false, errors: action.payload, movieData: []}
        default:
            return state;
    }
}