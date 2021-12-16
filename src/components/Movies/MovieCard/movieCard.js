import React from "react";
import { imageUrl } from "../../../API";

import Styles from "../styles.module.css";
import defaultImage from "../../../static/images/default-movie-1-3.jpg"
import { useHistory } from "react-router-dom";

const MovieCard = (props) => {
    const {poster_path, vote_average, title, overview, id} = props.movie
    const history = useHistory();

    const getColor = (vote) => {
        if(vote >= 8){
            return "green"
        } else if(vote >= 5){
            return "orange"
        } else {
            return "red"
        }
    }

    const onMovieClick = (movie_id) => {
        history.push(`/movies/${movie_id}`)
    }

    return (
        <div className={Styles.column}>
            <div className={Styles.card} onClick={() => onMovieClick(id)}>
                <button className={Styles.addToFavorite}>Add</button>
                <img src={poster_path === null ? defaultImage : `${imageUrl}${poster_path}`} alt="poster"/>
                <div className={Styles.info}>
                    <h3>{title}</h3>
                    <span className={Styles[getColor(vote_average)]}>{vote_average}</span>
                </div>
                <div className={Styles.overview}>
                        <h3>Overview</h3>
                        {overview}
                    </div>
            </div>
        </div>
    )
}

export default MovieCard;