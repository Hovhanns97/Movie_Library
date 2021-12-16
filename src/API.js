const API_KEY = "api_key=01fd7a30b5ad042a2eb302a80642ae07";
const baseURL = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/w500";


export const fetch_movies = (url, filter) => {
    let filterQuery = filter && filter.length !== 0 ? filter.join(",") : "";
    const API_URL = `${baseURL}/discover/movie?${url}&${API_KEY}&with_genres=${encodeURI(filterQuery)}`
    return fetch(API_URL).then(res => res.json())
} 

export const search_movies = (searchTerm) => {
    const SEARCH_URL = `${baseURL}/search/movie?${API_KEY}&query=${searchTerm}`;
    return fetch(SEARCH_URL).then(res => res.json())
}

export const get_current_movie = (movie_id) => {
    const GET_API = `${baseURL}/movie/${movie_id}?${API_KEY}`;
    return fetch(GET_API).then(res => res.json())
}

export const get_user = async () => {
    const GET_USER_API = `${baseURL}/account?${API_KEY}`;
    const requestToken = await get_request_token();
    if (requestToken.success) {
        const session = await create_session(requestToken);
        if(session.success) {
            return fetch(GET_USER_API).then(res => res.json())
        }
    }
} 

export const create_session = async (requestToken) => {
    const SESSION = `${baseURL}/authentication/session/new?${API_KEY}`;
    return fetch(SESSION, {"request_token": requestToken.request_token}).then(res => res.json())
}

export const get_request_token = () => {
    const REQUEST_TOKEN = `${baseURL}/authentication/token/new?${API_KEY}`;
    return fetch(REQUEST_TOKEN).then(res => res.json())
}