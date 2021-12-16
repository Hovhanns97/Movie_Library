import {
    GET_MOVIES,
    SET_LOADER,
    SET_CURRENT_MOVIE,
    SET_USER
} from "../constants"

import { fetch_movies, search_movies, get_current_movie, get_user } from "../../API"

export const setMovies = (movie) => ({
        type: GET_MOVIES,
        movie
})

export const setLoader = (bool) => ({
    type: SET_LOADER,
    bool
})

export const setCurrentMovie = (movie) => ({
    type: SET_CURRENT_MOVIE,
    movie
})

export const setUser = (data) => ({
    type: SET_USER,
    data
})

export const getMovies = (url, filter, page) => async dispatch =>{
    const response = await fetch_movies(url, filter);
    if (response.results) {
        dispatch(setMovies({data: response.results, filter, page}))
        dispatch(setLoader(false))
    }
}

export const searchMovies = (searchTerm) => async dispatch => {
    const response = await search_movies(searchTerm);
    if(response.results) {
        dispatch(setMovies({data: response.results, searchTerm}))
        dispatch(setLoader(false))
    }
}

export const getCurrentMovie = (movie_id) => async dispatch => {
    const response = await get_current_movie(movie_id);

    if (response.id) {
        dispatch(setCurrentMovie(response));
    } else {
        dispatch(setCurrentMovie(null));
    }
    dispatch(setLoader(false))

}

export const getUser = () => async dispatch => {
    const response = await get_user();
    dispatch(setUser(response.data))
}