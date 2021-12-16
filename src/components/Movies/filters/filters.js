import React from "react";
import GenresComponent from "./genres";
import SortingComponent from "./sorting";

import Styles from "./styles.module.css"

const Filters = (props) => {
    return (
        <div className={Styles.filters}>
            <GenresComponent 
                sorting={props.sorting}
                selectedGenres={props.selectedGenres}
                setSelectedGenres={props.setSelectedGenres}
            />
            <SortingComponent 
                setSorting={props.setSorting}
            />
        </div>
    )
}

export default Filters;