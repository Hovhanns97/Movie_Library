import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { imageUrl } from "../../../API";
import { getCurrentMovie } from "../../../redux/actions/action";
import defaultImage from "../../../static/images/default-movie-1-3.jpg"

import Styles from "../styles.module.css"

const MovieInfo = (props) => {
    const {movie_id} = props.match.params;
    const dispatch = useDispatch();
    const {current_movie} = useSelector((state) => state.reducer);

    useEffect(() => {
        dispatch(getCurrentMovie(movie_id))
    }, [movie_id])

    return (
        current_movie !== null ? 
        <div className={Styles.infoCard} >
            <img src={current_movie.poster_path === null ? defaultImage : `${imageUrl}${current_movie.poster_path}`} alt={current_movie.title}/>
            <div className={Styles.infoTable}>
                <h2 className={Styles.movieTitle}>{current_movie.title} <span>{`(${current_movie.release_date.split("-")[0]})`}</span></h2>
                <h3 className={Styles.movieTitle}>About the Movie</h3>
                <table>
                    <tr>
                        <td className={Styles.label}>Release Date</td>
                        <td className={Styles.cellValue}>{current_movie.release_date.split("-")[0]}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Country</td>
                        <td className={Styles.cellValue}>{current_movie.production_countries.map((x, index) => 
                            index !== current_movie.production_countries.length - 1 ? `${x.name}, ` : x.name)}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Budget</td>
                        <td className={Styles.cellValue}>{`${current_movie.budget} $`}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Genres</td>
                        <td className={Styles.cellValue}>{current_movie.genres.map((x, index) => 
                            index !== current_movie.genres.length - 1 ? `${x.name}, ` : x.name)}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Original Language</td>
                        <td className={Styles.cellValue}>{current_movie.original_language.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Original title</td>
                        <td className={Styles.cellValue}>{current_movie.original_title}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Status</td>
                        <td className={Styles.cellValue}>{current_movie.status}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Votes</td>
                        <td className={Styles.cellValue}>{current_movie.vote_average}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Vote Count</td>
                        <td className={Styles.cellValue}>{current_movie.vote_count}</td>
                    </tr>
                    <tr>
                        <td className={Styles.label}>Home page</td>
                        <td><a href={current_movie.homepage}>{current_movie.homepage}</a></td>
                    </tr>
                </table>
                <div className={Styles.movieOver}>
                    Overview
                    <p>{current_movie.overview}</p>
                 </div>
            </div>
            
        </div>
        : <div>
            Movie Not Found
        </div>
        
    )
}

export default withRouter(MovieInfo);