import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";


import Styles from "./styles.module.css";

import { getMovies } from "../../../redux/actions/action";
import {genres} from "../moviesUtil"

const GenresComponent = ({
    sorting,
    selectedGenres, 
    setSelectedGenres
    }) => {
    const dispatch = useDispatch();
    const [genresList, setGenresList] = useState(genres);

    const onGenreClick = (id) => {
        if(selectedGenres.length !== 0){
            selectedGenres.includes(id) ? setSelectedGenres(selectedGenres.filter(x => x !== id)) : setSelectedGenres([...selectedGenres, id])
        } else {
            setSelectedGenres([id])
        }

        let newGenresList = genresList.map(item => {
            if(item.id === id) {
                item.clicked = !item.clicked;
                return item
            } else {
                return item
            }
        })
        setGenresList(newGenresList)
    }

    useEffect(() => {
        dispatch(getMovies(`sort_by=${sorting}`, selectedGenres))
    }, [selectedGenres])

    return (
        <div className={Styles.genres}>
            {genresList.map(genre => {
                return (
                    <div className={genre.clicked ? Styles.genreActive : Styles.genre} onClick={() => onGenreClick(genre.id)}>{genre.name}</div>
                )
            })}
        </div>
    )
}

export default GenresComponent