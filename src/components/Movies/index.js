import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getUser, setLoader } from "../../redux/actions/action";
import Styles from "./styles.module.css"

import MovieCard from "./MovieCard/movieCard";
import preloader from "../../static/images/Ripple-1s-200px.svg"
import Filters from "./filters/filters";

const MovieList = () => {
    const dispatch = useDispatch()
    const {
        movies, 
        loader
    } = useSelector(state => state.reducer);
    const [page, setPage] = useState(1)
    const [sorting, setSorting] = useState("popularity.desc")
    const [selectedGenres, setSelectedGenres] = useState([]);


    useEffect(() => {
        dispatch(setLoader(true))
        dispatch(getUser())
        dispatch(getMovies(`sort_by=${sorting}`))
    }, [dispatch, sorting])

    const loadMoreMovies = () => {
        setPage(page + 1);
        dispatch(getMovies(`sort_by=${sorting}&page=${page + 1}`, selectedGenres, page + 1))
    }

    return (
        <div>
            <Filters 
                setSorting={setSorting}
                sorting={sorting}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
            />
            {loader ? 
                <div style={{margin: "auto", display: "flex", justifyContent: "center"}}>
                    <img src={preloader} alt={preloader}/> 
                </div> :
                <div className={Styles.row}>
                    {movies.length !== 0 ? movies.map(movie => {
                        return <MovieCard movie={movie} key={movie.id}/>
                    }) 
                    : <>No Results Found</>}
                </div>
            }
            <div className={Styles.loadMore} onClick={loadMoreMovies}>Load more movies</div>
        </div>
    )
}

export default MovieList