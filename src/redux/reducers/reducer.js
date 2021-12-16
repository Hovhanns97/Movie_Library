import {
    GET_MOVIES,
    SET_LOADER,
    SET_CURRENT_MOVIE,
    SET_USER
} from "../constants"
 
const initState = {
    movies: [],
    loader: false,
    current_movie: null,
    user: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            return {
                ...state,
                movies: action.movie.page > 1 ? [...state.movies, ...action.movie.data] : action.movie.data
            }
        }
        case SET_LOADER: {
            return {
                ...state,
                loader: action.bool
            }
        }
        case SET_CURRENT_MOVIE: {
            return {
                ...state,
                current_movie: action.movie
            }
        }
        case SET_USER: {
            return {
                ...state,
                user: action.data
            }
        }
        default:
            return state
    }
}